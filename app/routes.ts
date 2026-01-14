import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/about.tsx"),
  route("resume", "routes/resume.tsx"),
  route("contact", "routes/contact.tsx"),
  route("portfolio/:portfolioType", "routes/portfolio.tsx"),
] satisfies RouteConfig;
