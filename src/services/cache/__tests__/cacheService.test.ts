import "jest";
import {cacheService} from "../cacheService";
describe("Cache Service Tests",() => {



  it("should set and get a value from cache", async () => {
    const key = "testKey";
    const value = "testValue";

    await cacheService.set(key, value);
    const cachedValue = await cacheService.get(key);

    expect(cachedValue).toBe(value);
  });

  it("should return null for a non-existent key", async () => {
    const key = "nonExistentKey";
    const cachedValue = await cacheService.get(key);

    expect(cachedValue).toBeNull();
  });

  it("should delete a key from the cache", async () => {
    const key = "deleteKey";
    const value = "deleteValue";

    await cacheService.set(key, value);
    await cacheService.delete(key);
    const cachedValue = await cacheService.get(key);

    expect(cachedValue).toBeNull();
  });
})