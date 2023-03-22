import { dbContext } from "../db/DbContext.js"


class PlanetsService {
    async createPlanet(planetData) {
        const planet = await dbContext.Planet.create(planetData)
        return planet
    }


}

export const planetsService = new PlanetsService()