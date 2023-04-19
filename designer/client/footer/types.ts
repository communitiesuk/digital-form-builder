export type Footer = {
  text: string;
  href: string;
};

export interface ValidationError {
  href?: string;
  children: string;
}

export type ValidationErrors = {
  text?: ValidationError;
  href?: ValidationError;
};
