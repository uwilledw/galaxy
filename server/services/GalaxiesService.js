import { dbContext } from "../db/DbContext.js"



class GalaxiesService {

    async getGalaxies() {
        const galaxies = await dbContext.Galaxy.find()
        return galaxies
    }

    async getGalaxyById(galaxyId) {
        const galaxy = await dbContext.Galaxy.findById(galaxyId)
        return galaxy
    }

    async createGalaxy(galaxyData) {
        const galaxy = dbContext.Galaxy.create(galaxyData)
        return galaxy
    }
}

export const galaxiesService = new GalaxiesService()