import Portfolio from "../models/Portfolio.js";
import Content from "../models/Portfolio_Content.js";
import Project from "../models/Project.js";

//Add portfolio
export async function addPortfolio(req, res) {
    try {
        const { portfolio_name, template_type } = req.body;
        const user_id = req.params.userId;

        const portfolio = new Portfolio({ user_id, portfolio_name, template_type });
        const savedPortfolio = await portfolio.save();

        res.status(201).json(savedPortfolio);
    } catch (error) {
        console.error("Error in addPortfolio:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Update portfolio (name, etc.)
export async function updatePortfolio(req, res) {
    try {
        const portfolio = await Portfolio.findByIdAndUpdate(
            req.params.portfolioId,
            req.body,
            { new: true }
        );
        if (!portfolio) return res.status(404).json({ message: "Portfolio not found" });

        res.status(200).json(portfolio);
    } catch (error) {
        console.error("Error in updatePortfolio:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Update portfolio content (about, contact, etc.)
export async function updatePortfolioContent(req, res) {
    try {
        const content = await Content.findOneAndUpdate(
            { portfolio_id: req.params.portfolioId },
            req.body,
            { new: true, upsert: true }
        );
        res.status(200).json(content);
    } catch (error) {
        console.error("Error in updatePortfolioContent:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Delete portfolio
export async function deletePortfolio(req, res) {
    try {
        const portfolio = await Portfolio.findByIdAndDelete(req.params.portfolioId);
        if (!portfolio) return res.status(404).json({ message: "Portfolio not found" });

        res.status(200).json({ message: "Portfolio deleted" });
    } catch (error) {
        console.error("Error in deletePortfolio:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Get a user's portfolios
export async function getUserPortfolios(req, res) {
    try {
        const portfolios = await Portfolio.find({ user_id: req.params.userId });
        res.status(200).json(portfolios);
    } catch (error) {
        console.error("Error in getUserPortfolios:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Get all public portfolios (discover page)
export async function getAllPortfolios(req, res) {
    try {
        const portfolios = await Portfolio.find({ visibility: true });
        res.status(200).json(portfolios);
    } catch (error) {
        console.error("Error in getAllPortfolios:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Add project
export async function addProject(req, res) {
    try {
        const { description, link } = req.body;
        const project = new Project({ description, link });
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error("Error in addProject:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Update project
export async function updateProject(req, res) {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.projectId,
            req.body,
            { new: true }
        );
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(project);
    } catch (error) {
        console.error("Error in updateProject:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Delete project
export async function deleteProject(req, res) {
    try {
        const project = await Project.findByIdAndDelete(req.params.projectId);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json({ message: "Project deleted" });
    } catch (error) {
        console.error("Error in deleteProject:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Get portfolio projects
export async function getPortfolioProjects(req, res) {
    try {
        const projects = await Project.find({ portfolio_id: req.params.portfolioId });
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error in getPortfolioProjects:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}