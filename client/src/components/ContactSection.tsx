import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "이름을 입력해주세요." }),
  company: z.string().min(1, { message: "회사명을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  phone: z.string().optional(),
  interest: z.string({ required_error: "관심 분야를 선택해주세요." }),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    }
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "상담 신청이 완료되었습니다.",
        description: "곧 AIon 팀이 연락드리겠습니다.",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "오류가 발생했습니다.",
        description: error.message || "다시 시도해주세요.",
        variant: "destructive"
      });
    }
  });
  
  function onSubmit(data: FormValues) {
    mutate(data);
  }
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const features = [
    {
      title: "맞춤형 AI 전략 컨설팅",
      description: "귀사의 비즈니스 목표와 요구사항에 맞는 AI 도입 전략을 제시합니다."
    },
    {
      title: "RomiⒻ 데모 시연",
      description: "'에이전트 보스' 시스템의 실제 작동 방식과 효과를 직접 체험해 보세요."
    },
    {
      title: "ROI 분석 및 예측",
      description: "AIon 솔루션 도입 시 예상되는 투자 수익률과 비즈니스 임팩트를 확인하세요."
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6"
              variants={item}
            >
              AI 혁신의 여정을 지금 시작하세요
            </motion.h2>
            <motion.p 
              className="text-white/80 mb-8"
              variants={item}
            >
              AIon Inc.의 전문가 팀이 귀사의 AI 전환과 '프론티어 기업'으로의 도약을 지원합니다. 지금 바로 무료 상담을 신청하고, RomiⒻ와 '에이전트 보스' 시스템의 가치를 직접 경험하세요.
            </motion.p>
            
            <motion.div 
              className="space-y-6 mb-8"
              variants={container}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={item}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-primary mb-6">무료 상담 신청</h3>
              
              {/* Contact form */}
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 mx-auto flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">감사합니다!</h4>
                  <p className="text-muted mb-6">상담 신청이 완료되었습니다. 곧 AIon 팀이 연락드리겠습니다.</p>
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={() => setIsSubmitted(false)}
                  >
                    다시 작성하기
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">이름 *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="홍길동" 
                              {...field} 
                              className="border-primary/20 focus:ring-2 focus:ring-secondary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">회사명 *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="AIon Inc." 
                              {...field} 
                              className="border-primary/20 focus:ring-2 focus:ring-secondary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">이메일 *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              type="email" 
                              {...field} 
                              className="border-primary/20 focus:ring-2 focus:ring-secondary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">연락처</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="010-1234-5678" 
                              {...field} 
                              className="border-primary/20 focus:ring-2 focus:ring-secondary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">관심 분야 *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-primary/20 focus:ring-2 focus:ring-secondary/50">
                                <SelectValue placeholder="선택해주세요" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consulting">AI 전략 컨설팅</SelectItem>
                              <SelectItem value="agent_boss">에이전트 보스 시스템</SelectItem>
                              <SelectItem value="implementation">AI 구현 및 통합</SelectItem>
                              <SelectItem value="training">조직 역량 강화</SelectItem>
                              <SelectItem value="other">기타</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">메시지</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="문의사항을 작성해주세요." 
                              rows={4} 
                              {...field} 
                              className="border-primary/20 focus:ring-2 focus:ring-secondary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg"
                      disabled={isPending}
                    >
                      {isPending ? "제출 중..." : "무료 상담 신청하기"}
                    </Button>
                    
                    <p className="text-xs text-muted text-center">
                      제출하시면 AIon Inc.의 <a href="#" className="text-secondary hover:underline">개인정보처리방침</a>에 동의하는 것으로 간주됩니다.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
