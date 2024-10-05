import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import csrf from 'csurf';

export default (app: any) => {
  // Set security headers
  app.use(helmet());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100,
  });
  app.use(limiter);

  // Prevent XSS attacks
  app.use(xss());

  // Enable CSRF protection
  const csrfProtection = csrf();
  app.use(csrfProtection);
};
