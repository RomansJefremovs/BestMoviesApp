import {getFavouritesIds} from "../middleware/getFavouritesIds";

const testObject = [640759,988233]
test('Successful api call, returns an array of type number',async ()=>{
    const response = await getFavouritesIds(45)
    expect(response).toEqual(testObject)
})
test('Unsuccessful api call, returns an array of type number',async ()=>{
    const response = await getFavouritesIds(0)
    expect(response).toEqual([])
})