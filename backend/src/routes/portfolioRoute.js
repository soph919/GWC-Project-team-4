import express from "express";
import {
    addPortfolio, updatePortfolio, updatePortfolioContent,
    deletePortfolio, getUserPortfolios, getAllPortfolios,
    addProject, updateProject, deleteProject, getPortfolioProjects,
    addPortfolioContent
} from "../controllers/portfolioController.js";
import upload from "../lib/multer.js"

const router = express.Router();

//Portfolio routes
router.post("/user/:userId", upload.single('image'), addPortfolio);
router.put("/:portfolioId", upload.single('image'), updatePortfolio);
router.post("/:portfolioId/content", addPortfolioContent);
router.put("/:portfolioId/content", updatePortfolioContent);
router.delete("/:portfolioId", deletePortfolio);
router.get("/user/:userId", getUserPortfolios);
router.get("/discover", getAllPortfolios);

//Project routes
router.post("/:portfolioContentId/projects",upload.single('image'), addProject);
router.put("/projects/:projectContentId/:projectId",upload.single('image'), updateProject);
router.delete("/projects/:projectContentId/:projectId", deleteProject);
router.get("/:portfolioContentId/projects", getPortfolioProjects);

export default router;