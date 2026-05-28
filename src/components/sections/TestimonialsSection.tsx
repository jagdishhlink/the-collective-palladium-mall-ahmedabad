"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { aiContent } from "@/data/site-data";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = aiContent.testimonials || [];
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all group hover-lift"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name?.charAt(0) || "?"}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
