"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/reveal";

// Since we can't authenticate the API without a token, we use the profile grid approach
// and link directly to the Instagram profile with a visually beautiful presentation
const INSTAGRAM_POSTS = [
  { href: "https://www.instagram.com/drishtiikaar/", src: "/media/gallery-final/img_11.jpeg", label: "@drishtiikaar Profile", views: "Profile" },
  { href: "https://www.instagram.com/reel/Ddl80CdRmAo/?stkn=MW1mOWlua2NuN2lvMA==", src: "/media/reels/reel-2.png", label: "Composition Study", views: "Reel" },
  { href: "https://www.instagram.com/reel/Dd4CE9ARTBf/?stkn=ZnZvZnhpdDhnd3Zo", src: "/media/reels/reel-3.png", label: "Chandelier Shot", views: "Reel" },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="section-pad bg-[#0d0d0d] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-12">
        <div className="label-row">
          <div className="space-y-2">
            <span className="eyebrow">Instagram · <a href="https://www.instagram.com/drishtiikaar/" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline cursor-pointer" data-cursor="hover">@drishtiikaar</a></span>
            <h2 className="section-title">Moments Between Takes</h2>
          </div>
          <a
            href="https://www.instagram.com/drishtiikaar/"
            target="_blank"
            rel="noreferrer"
            className="btn hidden sm:inline-flex cursor-none"
            data-cursor="hover"
          >
            <Instagram className="h-3.5 w-3.5" />
            Follow on Instagram
          </a>
        </div>

        {/* Visual Frames Grid (using our local thumbnails as preview cards) */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post, i) => (
              <motion.a
                key={i}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-[#f5f0e8]/05 bg-[#111] block cursor-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Image
                  src={post.src}
                  alt={post.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Instagram overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-white mb-2" />
                  <p className="font-mono text-[0.58rem] tracking-wider uppercase text-white/80">{post.label}</p>
                  <p className="font-mono text-[0.55rem] text-white/50 mt-1">{post.views} views</p>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="flex flex-col items-center gap-4 pt-4 text-center">
          <p className="font-body text-[#f5f0e8]/45 max-w-sm leading-relaxed">
            Follow along for reels, BTS, and frames that didn&apos;t make the cut but deserved to.
          </p>
          <a
            href="https://www.instagram.com/drishtiikaar/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold cursor-none"
            data-cursor="hover"
          >
            <Instagram className="h-3.5 w-3.5" />
            More on Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
