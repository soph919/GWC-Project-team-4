import express from "express";
import {
    addPortfolio, updatePortfolio, updatePortfolioContent,
    deletePortfolio, getUserPortfolios, getAllPortfolios,
    addProject, updateProject, deleteProject, getPortfolioProjects
} from "../controllers/portfolioController.js";
import upload from "../lib/multer.js"

const router = express.Router();

//Portfolio routes
router.post("/user/:userId", upload.single('image'), addPortfolio);
router.put("/:portfolioId", updatePortfolio);
router.put("/:portfolioId/content", updatePortfolioContent);
router.delete("/:portfolioId", deletePortfolio);
router.get("/user/:userId", getUserPortfolios);
router.get("/discover", getAllPortfolios);

//Project routes
router.post("/:portfolioId/projects", addProject);
router.put("/projects/:projectId", updateProject);
router.delete("/projects/:projectId", deleteProject);
router.get("/:portfolioId/projects", getPortfolioProjects);

export default router;