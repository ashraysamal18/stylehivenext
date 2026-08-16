'use client';
import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Award, Plus, ThumbsUp, Sparkles, Building2 } from 'lucide-react';

export default function ProfileVerification() {
  // 1. Subtle Verifications State
  const verifications = [
    { type: 'Identity', verified: true, tooltip: 'Government ID & Phone Verified' },
    { type: 'Portfolio', verified: true, tooltip: 'Work authenticity checked by StyleHive' },
    { type: 'Experience', verified: true, tooltip: 'Verified employment & client history' }
  ];

  // 2. Skills & Endorsements State
  const [skills, setSkills] = useState([
    { 
      id: 's1', 
      name: 'Fashion Styling', 
      endorsements: 14, 
      endorsedBy: ['Vogue Studios', 'Aura Luxury', 'Elena R.'],
      userEndorsed: false 
    },
    { 
      id: 's2', 
      name: 'Adobe Photoshop', 
      endorsements: 22, 
      endorsedBy: ['Maison Luxe', 'Marcello V.'],
      userEndorsed: true 
    },
    { 
      id: 's3', 
      name: 'Creative Direction', 
      endorsements: 9, 
      endorsedBy: ['Condé Nast India'],
      userEndorsed: false 
    },
    { 
      id: 's4', 
      name: 'Runway Choreography', 
      endorsements: 5, 
      endorsedBy: ['Paris Fashion Week'],
      userEndorsed: false 
    }
  ]);

  // Toggle Endorsement Handler
  const handleEndorse = (skillId) => {
    setSkills(skills.map(skill => {
      if (skill.id === skillId) {
        const isEndorsed = skill.userEndorsed;
        return {
          ...skill,
          endorsements: isEndorsed ? skill.endorsements - 1 : skill.endorsements + 1,
          userEndorsed: !isEndorsed
        };
      }
      return skill;
    }));
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      
      {/* SECTION 1: SUBTLE VERIFICATION BADGES */}
      <div className="mb-4 pb-3 border-bottom">
        <span className="text-muted extra-small fw-bold text-uppercase d-block mb-2">Trust & Authenticity</span>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {verifications.map((v, idx) => (
            v.verified && (
              <div 
                key={idx} 
                className="d-inline-flex align-items-center gap-1.5 px-3 py-1 rounded-pill bg-light border text-secondary extra-small fw-semibold"
                title={v.tooltip}
              >
                <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                <span>{v.type} verified</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* SECTION 2: ENDORSED SKILLS */}
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
              <Award size={18} style={{ color: '#8C533C' }} /> Skills & Endorsements
            </h6>
            <span className="text-muted extra-small">Endorsed by clients, studios, and creative peers</span>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="row g-3">
          {skills.map((skill) => (
            <div key={skill.id} className="col-12 col-md-6">
              <div className="p-3 bg-light rounded-4 border d-flex justify-content-between align-items-center transition hover-lift">
                <div>
                  <h6 className="fw-bold text-dark mb-1 small">{skill.name}</h6>
                  
                  {/* Client Endorsement Teaser */}
                  <div className="d-flex align-items-center gap-1 text-muted extra-small">
                    <Building2 size={12} />
                    <span>Endorsed by <strong>{skill.endorsedBy[0]}</strong> {skill.endorsedBy.length > 1 && `+${skill.endorsedBy.length - 1} more`}</span>
                  </div>
                </div>

                {/* Endorse Action Button */}
                <button
                  onClick={() => handleEndorse(skill.id)}
                  className={`btn btn-sm rounded-pill px-3 py-1 extra-small fw-bold d-flex align-items-center gap-1.5 transition ${
                    skill.userEndorsed
                      ? 'bg-dark text-white border-dark'
                      : 'btn-white bg-white text-dark border shadow-sm'
                  }`}
                >
                  <ThumbsUp size={12} fill={skill.userEndorsed ? 'currentColor' : 'none'} />
                  <span>{skill.endorsements}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}