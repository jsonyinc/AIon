"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtNS41NTYtOS45NDItMi4zLTIyLjUyNyA3LjY0MS0yOC4wODJDMjcuODA5IDkuMDQyIDQwLjM5NSAxMi4yOTcgNDUuOTUgMjIuMjM5YzUuNTU2IDkuOTQzIDIuMyAyMi41MjgtNy42NDEgMjguMDgyLTkuOTQyIDUuNTU1LTIyLjUyNyAyLjMtMjguMDg0LTcuNjQxeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI로 혁신하는 비즈니스 미래, AION
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            인공지능 기술로 비즈니스 프로세스를 최적화하고, 혁신적인 솔루션을 제공합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild className="bg-accent text-white hover:bg-accent/90 px-8 py-3 text-lg">
              <a href="#contact">시작하기</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
