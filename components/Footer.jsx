'use client';
import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-top mt-auto py-4">
      <div className="container-fluid px-lg-5">
        <div className="row g-4 justify-content-between align-items-center">
          {/* Brand & Copyright */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <Link href="/" className="fw-bold text-primary text-decoration-none fs-5">
              StyleHive
            </Link>
            <p className="text-muted small mb-0 mt-1">
              The premier professional network for the global fashion community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-5">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 small text-muted">
              <Link href="/about" className="text-muted text-decoration-none hover-primary">About</Link>
              <Link href="/jobs" className="text-muted text-decoration-none hover-primary">Careers</Link>
              <Link href="/privacy" className="text-muted text-decoration-none hover-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-muted text-decoration-none hover-primary">Terms of Service</Link>
              <Link href="/help" className="text-muted text-decoration-none hover-primary">Help Center</Link>
            </div>
          </div>
        </div>

        <hr className="my-3 text-muted opacity-25" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-muted small">
          <span>&copy; {new Date().getFullYear()} StyleHive Inc. All rights reserved.</span>
          <span className="d-flex align-items-center gap-1 mt-2 mt-sm-0">
            Crafted with <Heart size={14} className="text-danger fill-danger" /> for designers & creators.
          </span>
        </div>
      </div>
    </footer>
  );
}