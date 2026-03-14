import { POST } from "./route";
import { NextRequest } from "next/server";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ ok: true }),
  })
) as any;

describe("[POST] /api/contact", () => {
  it("sends mail on valid payload", async () => {
    const req = {
      json: async () => ({
        firstName: "Chirag",
        lastName: "Dodiya",
        email: "hi@chirag.co",
        subject: "Test",
        message: "This is a test",
      }),
    } as unknown as NextRequest;
    const response = await POST(req);
    // Should return ok response
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.ok).toBe(true);
  });

  it("returns error on weak/missing data", async () => {
    const req = {
      json: async () => ({
        firstName: "",
        lastName: "",
        email: "not-an-email",
        subject: "",
        message: "",
      }),
    } as unknown as NextRequest;
    const response = await POST(req);
    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toBeDefined();
  });
});