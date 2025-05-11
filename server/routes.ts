import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string(),
  message: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically save the contact form to your database
      // or send it via email. For this example, we'll just return success.
      
      // Simulate a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return res.status(200).json({ 
        success: true,
        message: "상담 문의가 성공적으로 접수되었습니다." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "입력 정보를 확인해주세요.",
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "서버 오류가 발생했습니다. 다시 시도해주세요." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
