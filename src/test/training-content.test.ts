import { describe, expect, it } from "vitest";
import { CHECKOUT_URL, training } from "@/lib/training-content";

describe("Verified sales information", () => {
  it("preserves the exact affiliate checkout requested by the owner", () => {
    expect(CHECKOUT_URL).toBe("https://go.hotmart.com/X108292328M?dp=1");
  });
  it("leaves unconfirmed commercial conditions unpublished", () => {
    expect(training.price).toBeNull();
    expect(training.payment).toBeNull();
    expect(training.guarantee).toBeNull();
    expect(training.accessPeriod).toBeNull();
  });
  it("does not invent modules, tools or testimonials", () => {
    expect(training.modules).toEqual([]);
    expect(training.tools).toEqual([]);
    expect(training.testimonials).toEqual([]);
  });
});