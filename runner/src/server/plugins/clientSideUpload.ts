import { HapiRequest, HapiResponseToolkit } from "../types";

export default {
  plugin: {
    name: "clientSideUpload",
    register: (server) => {
      server.route({
        method: "POST",
        path: "/s3-create-pre-signed-url",
        handler: async (request: HapiRequest) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const {
            filename,
            formKey,
            pageKey,
            componentKey,
          } = request.payload as any;

          const form = request.server.app.forms[formKey];
          const page = form?.pages.find(
            (p) =>
              uploadService.normalisePath(p.path) ===
              uploadService.normalisePath(pageKey)
          );

          const metaData = {
            page: encodeURI(page.title),
            section: encodeURI(page.section?.title ?? ""),
            componentName: componentKey,
          };

          const url = await uploadService.getPreSignedUrlS3(
            `${applicationId}/${filename}`,
            metaData
          );

          return { url };
        },
        options: {
          payload: {
            allow: "application/json",
            parse: true,
            maxBytes: 1024 * 1024 * 5, // 5MB payload limit
          },
          cors: {
            origin: ["*"],
            additionalHeaders: ["cache-control", "x-requested-with"],
          },
        },
      });

      server.route({
        method: "GET",
        path: "/s3-download-file",
        handler: async (request: HapiRequest, h: HapiResponseToolkit) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";

          const url = await uploadService.getFileDownloadUrlS3(
            `${applicationId}/${filename}`
          );
          return h.redirect(url);
        },
        options: {
          cors: {
            origin: ["*"],
            additionalHeaders: ["cache-control", "x-requested-with"],
          },
        },
      });

      server.route({
        method: "DELETE",
        path: "/s3-delete-file-by-key",
        handler: async (request, h) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { filename } = request.payload;

          const wasDeleted = uploadService.deleteFileS3(
            `${applicationId}/${filename}`
          );
          if (wasDeleted) {
            return h.response("File deleted from S3").code(200);
          } else {
            return h.response("Error deleting file from S3").code(500);
          }
        },
        options: {
          cors: {
            origin: ["*"],
            additionalHeaders: ["cache-control", "x-requested-with"],
          },
        },
      });

      server.route({
        method: "GET",
        path: "/s3-file-info",
        handler: async (request, h) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { filename } = request.query;

          const response = await uploadService.headFileS3(
            `${applicationId}/${filename}`
          );

          if (response) {
            const { ContentLength, Metadata } = response;
            return h
              .response({
                filename,
                contentLength: ContentLength,
                metadata: Metadata,
              })
              .code(200);
          } else {
            return h
              .response("Error retrieving file metadata from S3")
              .code(500);
          }
        },
        options: {
          cors: {
            origin: ["*"],
            additionalHeaders: ["cache-control", "x-requested-with"],
          },
        },
      });
    },
  },
};
