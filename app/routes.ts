import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("portfolio/:portfolioType", "routes/portfolio.tsx"),
  route("resume", "routes/resume.tsx"),
] satisfies RouteConfig;
