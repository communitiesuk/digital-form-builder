import { HapiRequest, HapiResponseToolkit } from "../types";

export default {
  plugin: {
    name: "clientSideUpload",
    register: (server) => {
      server.route({
        method: "POST",
        path: "/s3/{id}/{pageKey}/{componentKey}/create-pre-signed-url",
        handler: async (request: HapiRequest) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { id, pageKey, componentKey } = request.params as any;
          const { filename } = request.payload;

          const form = request.server.app.forms[id];
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

          const key = `${applicationId}/${id}/${pageKey}/${componentKey}/${filename}`;
          const url = await uploadService.getPreSignedUrlS3(key, metaData);
          return { url };
        },
      });

      server.route({
        method: "GET",
        path: "/s3/{id}/{pageKey}/{componentKey}/download-file",
        handler: async (request: HapiRequest, h: HapiResponseToolkit) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { id, pageKey, componentKey } = request.params as any;
          const { filename } = request.query;

          const key = `${applicationId}/${id}/${pageKey}/${componentKey}/${filename}`;
          const url = await uploadService.getFileDownloadUrlS3(key);
          return h.redirect(url);
        },
      });

      server.route({
        method: "DELETE",
        path: "/s3/{id}/{pageKey}/{componentKey}/delete-file-by-key",
        handler: async (request, h) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { id, pageKey, componentKey } = request.params as any;
          const { filename } = request.payload;

          const key = `${applicationId}/${id}/${pageKey}/${componentKey}/${filename}`;
          const wasDeleted = uploadService.deleteFileS3(key);
          if (wasDeleted) {
            return h.response("File deleted from S3").code(200);
          } else {
            return h.response("Error deleting file from S3").code(500);
          }
        },
      });

      server.route({
        method: "POST",
        path: "/s3/{id}/{pageKey}/{componentKey}/nojs-upload",
        options: {
          payload: {
            output: "stream",
            parse: true,
            multipart: true,
            maxBytes: 1024 * 1024 * 50, // 50MB max file size
          },
        },
        handler: async (request, h) => {
          const { uploadService, cacheService } = request.services([]);
          const state = await cacheService.getState(request);
          const applicationId = state.metadata?.application_id ?? "";
          const { id, pageKey, componentKey } = request.params;
          const pagePath = uploadService.normalisePath(pageKey);
          const form = request.server.app.forms[id];
          const page = form?.pages.find(
            (p) => uploadService.normalisePath(p.path) === pagePath
          );
          const metaData = {
            page: encodeURI(page.title),
            section: encodeURI(page.section?.title ?? ""),
            componentName: componentKey,
          };
          try {
            const data = request.payload;
            const files = Array.isArray(data.file) ? data.file : [data.file];
            for (const file of files) {
              const key = `${applicationId}/${id}/${pagePath}/${componentKey}/${file.hapi.filename}`;
              s3UploadParams.Key = key;
              s3UploadParams.Body = file;
              await uploadService.uploadS3(s3UploadParams);
            }
            return h.redirect(request.headers.referer);
          } catch (err) {
            console.error(err);
            return h.response("Internal server error").code(500);
          }
        },
      });
    },
  },
};
