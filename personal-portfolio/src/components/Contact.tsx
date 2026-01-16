import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeUp } from "@/lib/animations";
import { sendContactMessage } from "@/services/api";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef, useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    company: z.string().max(50).optional().or(z.literal('')),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().max(20).optional().or(z.literal('')),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000),
    "h-captcha-response": z.string().min(1, "Captcha is required"),
});

type ContactFromValues = z.infer<typeof contactSchema>;

export const Contact = () => {
    const captchaRef = useRef<HCaptcha>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'captcha-missing'>('idle');

    const form = useForm<ContactFromValues>({
            resolver: zodResolver(contactSchema),
            defaultValues: {
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '', 
                "h-captcha-response": '',
            },
        });

    const onHCaptchaChange = (token: string) => {
        form.setValue("h-captcha-response", token, { shouldValidate: true });
        if (status === 'captcha-missing') setStatus('idle');
    };

    const onSubmit = async (values: ContactFromValues) => {
        setStatus('idle');
        
        if (!values["h-captcha-response"]) {
            setStatus('captcha-missing');
            return;
        }

        try {
            const result = await sendContactMessage(values);
            
            if (result.success) {
                setStatus('success');
                form.reset();
                captchaRef.current?.resetCaptcha();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8}}
            variants={fadeUp}
            className="mt-30 scroll-mt-10"
            id='contact'
            >
                <SectionHeader 
                subtitle="Contact"
                title="Let's make something awesome together!"
                />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="w-full mx-auto space-y-4 mt-10"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField 
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Your name" className="border-0" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='company'
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Company name" className="border-0" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input type='email' placeholder="you@example.com" className="border-0" {...field} />
                                    </FormControl>
                                    <FormMessage /> 
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='phone'
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input type='tel' placeholder="+1234567890" className="border-0" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField 
                        control={form.control}
                        name='message'
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder="Write your message..." className="h-36 border-0" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col items-center gap-4 py-4">
                        <HCaptcha
                            ref={captchaRef}
                            sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                            onVerify={onHCaptchaChange}
                            onExpire={() => form.setValue("h-captcha-response", "")}
                        />
                        {form.formState.errors["h-captcha-response"] && (
                             <span className="text-sm text-red-500 font-medium flex items-center gap-1">
                                <AlertCircle size={14} /> {form.formState.errors["h-captcha-response"]?.message}
                             </span>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full md:w-auto cursor-pointer"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>

                        {status === 'success' && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 text-green-500 font-medium p-2 bg-green-500/10 rounded-md border border-green-500/20"
                            >
                                <CheckCircle2 size={18} />
                                <span>Message sent! I'll get back to you soon.</span>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-500 font-medium p-2 bg-red-500/10 rounded-md border border-red-500/20">
                                <AlertCircle size={18} />
                                <span>Something went wrong. Please try again.</span>
                            </div>
                        )}
                    </div>

                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }}></input>
                </form>
            </Form>
        </motion.section>
    );
};