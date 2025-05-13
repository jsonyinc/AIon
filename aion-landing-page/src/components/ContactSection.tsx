"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useState } from "react";
import { supabase } from '../lib/supabaseClient';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, { message: "이름을 입력해주세요." }),
    email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
    company: z.string().optional(),
    interest: z.string({ required_error: "관심 분야를 선택해주세요." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    async function saveContactData() {
      try {
        const { data, error } = await supabase.from('contacts').insert([
          {
            name: values.name,
            email: values.email,
            company: values.company || '',
            interest: values.interest,
          }
        ]);
        if (error) {
          console.error('Error saving contact data:', error.message);
        } else {
          console.log('Contact data saved successfully:', data);
          setSubmitted(true);
        }
      } catch (err) {
        console.error('Error saving contact data:', err);
      }
    }
    saveContactData();
  }

  return (
    <section id="contact" className="py-16 bg-neutral-cloudWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">문의하기</h2>
          <p className="text-neutral-charcoalGray mb-8">AION에 대해 더 알고 싶으신가요? 문의 사항을 보내주시면 곧 연락드리겠습니다.</p>
          
          {submitted ? (
            <div className="bg-secondary text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">감사합니다!</h3>
              <p>문의 사항을 접수하였습니다. 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="이메일을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>회사명 (선택사항)</FormLabel>
                      <FormControl>
                        <Input placeholder="회사명을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>관심 분야</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="관심 분야를 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ai">AI 솔루션</SelectItem>
                          <SelectItem value="consulting">컨설팅 서비스</SelectItem>
                          <SelectItem value="partnership">파트너십</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-accent text-white hover:bg-accent/90 mt-4">
                  문의하기
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
