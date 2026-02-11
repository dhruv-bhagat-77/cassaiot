import { NextResponse } from 'next/server';

// Mock data - replace with your actual database query
export async function GET() {
  const data = {
  categories: [
    {
      id: "vision",
      name: "Vision Sensors",
      products: [
        {
          id: "cass-vision-flow",
          name: "CASS VisionFlow",
          tagline: "AI-Powered Real-Time Inventory Intelligence",
          description: "Track Raw Materials, Production & Dispatch — automatically, accurately, and in real time using AI, Computer Vision, and ERP integration.",
          image: "/images/products/vision-sensor.jpg",
          hero: {
            title: "CASS VisionFlow",
            tagline: "AI-Powered Real-Time Inventory Intelligence",
            description: "Track Raw Materials, Production & Dispatch — automatically, accurately, and in real time using AI, Computer Vision, and ERP integration.",
            buttons: [
              {
                text: "👉 Request Demo",
                style: "primary"
              },
              {
                text: "👉 Talk to Our Experts", 
                style: "secondary"
              }
            ]
          },
          problem: {
            title: "Inventory Management Challenges",
            subtitle: "Why Traditional Inventory Systems Fail on Factory Floor",
            description: "Most inventory systems rely on assumptions — not reality.",
            issues: [
              "Manual counting errors & time delays",
              "Mismatch between ERP and physical stock",
              "No real-time visibility of WIP movement",
              "Production bottlenecks due to stockouts",
              "Compliance & audit trail gaps"
            ],
            conclusion: "What systems show ≠ what is actually moving."
          },
          introduction: {
            title: "Camera-First Intelligence",
            subtitle: "Camera-First Inventory Intelligence",
            description: "CASS VisionFlow™ replaces assumptions with verification.<br /><br />Instead of relying only on manual entries or barcode scans, VisionFlow tracks actual physical movement using:",
            technologies: [
              "Computer Vision",
              "AI & Machine Learning",
              "IoT Sensors",
              "Real-time Analytics"
            ],
            resultTitle: "Result:",
            resultItems: [
              "Verified inventory",
              "Real-time accuracy",
              "Zero blind spots"
            ]
          },
          mission: {
            title: "MISSION & VISION",
            icon: "🎯",
            subtitle: "Empowering manufacturers with real-time operational intelligence",
            mission: "To eliminate inventory blind spots and empower manufacturers with real-time operational intelligence.",
            vision: "A world where every factory operates with perfect inventory visibility and zero waste."
          },
          solutionModules: {
            title: "SOLUTION MODULES",
            subtitle: "Modular. Scalable. Factory-Ready.",
            description: "Deploy what you need. Scale when you grow.",
            list: [
              "Raw Material Tracking",
              "WIP Monitoring", 
              "Finished Goods Management",
              "Dispatch & Logistics",
              "Quality Control Integration",
              "ERP Synchronization",
              "Analytics Dashboard",
              "Mobile Access"
            ]
          },
          usp: {
            title: "UNIQUE VALUE PROPOSITION",
            subtitle: "Why VisionFlow Is Different",
            traditionalTitle: "❌ Traditional Systems",
            traditionalFeatures: [
              "Rely on manual data entry",
              "Barcode-dependent only",
              "Require ERP replacement",
              "Built for ideal lab conditions",
              "Single tracking method"
            ],
            visionFlowTitle: "✨ CASS VisionFlow™",
            features: [
              "Camera-first verification (no manual entry)",
              "Works with existing ERP (no replacement needed)",
              "Built for factory floor conditions",
              "Multi-modal tracking (AI + IoT + RFID)",
              "Real-time alerts & analytics"
            ],
            conclusion: {
              icon: "💡",
              text: "This is not inventory software.<br />This is inventory intelligence."
            }
          },
          industries: {
            title: "INDUSTRIES WE SERVE",
            icon: "🏭",
            list: [
              "Automotive",
              "Pharmaceuticals",
              "Electronics",
              "Food & Beverage",
              "Textiles",
              "Chemicals",
              "FMCG",
              "Metal & Steel"
            ]
          },
          flow: {
            title: "HOW THE SYSTEM WORKS",
            subtitle: "End-to-End Flow",
            icon: "🔄",
            stepIcons: ["📥", "🏭", "✅", "🚚", "🔄"],
            conclusion: "Every movement is captured, validated, and logged.",
            steps: [
              {
                step: "Raw Material Inward",
                description: "Verified via camera, barcode, QR, or OCR"
              },
              {
                step: "Production Line",
                description: "AI tracks real-time consumption & output"
              },
              {
                step: "Inspection / Packing",
                description: "Automatic counting & validation"
              },
              {
                step: "Dispatch & Dock",
                description: "Quantity, route & load verification"
              },
              {
                step: "ERP Sync",
                description: "Instant updates to ERP & business systems"
              }
            ]
          },
          dashboard: {
            title: "CENTRALIZED SAAS DASHBOARD",
            subtitle: "One Dashboard. Complete Control.",
            icon: "📊",
            features: [
              { icon: "🌐", text: "Live inventory across all plants & locations" },
              { icon: "👁️", text: "Line-wise, SKU-wise, dock-wise visibility" },
              { icon: "📹", text: "Real-time camera feeds with AI counts" },
              { icon: "📈", text: "Shift / day / month analytics" },
              { icon: "🔔", text: "Alerts, logs & audit trails" }
            ],
            footer: "Accessible on Web, Desktop & Mobile."
          },
          integration: {
            title: "ERP & SOFTWARE INTEGRATION",
            subtitle: "Enhance. Don't Replace.",
            icon: "🔗",
            features: [
              { icon: "🔌", text: "Seamless API-based integration" },
              { icon: "🔄", text: "Syncs with ERP, production & sales systems" },
              { icon: "⚡", text: "Automated workflows & notifications" },
              { icon: "✅", text: "Compatible with SAP, Tally, Oracle & custom ERP" }
            ],
            footer: "Your team keeps familiar tools — VisionFlow makes them accurate."
          },
          whereUsed: {
            title: "WHERE IT IS USED",
            icon: "📍",
            list: [
              "Manufacturing Plants",
              "Warehouses & Distribution Centers",
              "Conveyor-Based Production Lines",
              "Multi-Dock Loading & Dispatch Areas",
              "Robot-Assisted Material Handling Systems"
            ],
            footer: "From single-line factories to multi-plant enterprises."
          },
          whyCassAIOT: {
            title: "WHY CASS AIOT",
            icon: "🏆",
            list: [
              "Proprietary AI vision models trained for industrial environments",
              "Proven deployment in 50+ factories across India",
              "ISO 27001 certified security & data privacy",
              "24/7 dedicated support & maintenance",
              "Customizable to your specific workflow needs"
            ],
            conclusion: {
              icon: "🏆",
              text: "We don't just sell software.<br />We engineer operational intelligence."
            }
          },
          cta: {
            title: "Ready to eliminate inventory errors for good?",
            description: "Transform your factory into a real-time, data-driven operation with CASS VisionFlow™.",
            buttons: [
              {
                text: "👉 Request a Live Demo",
                style: "primary"
              },
              {
                text: "👉 Schedule a Consultation", 
                style: "secondary"
              }
            ]
          }
        },

    
      ]
    },

    {
      id: "robots",
      name: "Robots",
      products: [
        {
          id: "robot-arm",
          name: "Industrial Robot Arm",
          tagline: "6-Axis Precision Automation",
          description: "Advanced robotic arm for industrial automation and material handling.",
          image: "/images/products/robot-arm.jpg",
          hero: {
            title: "CASS Industrial Robot Arm",
            tagline: "6-Axis Precision Automation",
            description: "Advanced robotic arm for industrial automation and material handling.",
            buttons: [
              {
                text: "👉 Request Demo",
                style: "primary"
              },
              {
                text: "👉 Talk to Our Experts", 
                style: "secondary"
              }
            ]
          },
          problem: {
            title: "Automation Challenges",
            subtitle: "Why Manual Processes Limit Production Efficiency",
            description: "Manual operations cannot meet modern production demands.",
            issues: [
              "Inconsistent quality from manual operations",
              "Limited production capacity",
              "High labor costs and dependency",
              "Safety risks for workers",
              "Inability to operate 24/7"
            ],
            conclusion: "Manual operations cannot meet modern production demands."
          },
          introduction: {
            title: "Advanced Robotics",
            subtitle: "Precision Automation Technology",
            description: "Industrial robots revolutionize manufacturing by handling repetitive tasks with precision and reliability.<br /><br />Our robotic systems utilize:",
            technologies: [
              "6-Axis Movement",
              "Precision Control",
              "AI Vision Integration",
              "Real-time Monitoring"
            ],
            resultTitle: "Result:",
            resultItems: [
              "Precision automation",
              "Increased productivity",
              "Enhanced safety"
            ]
          },
          mission: {
            title: "MISSION & VISION",
            icon: "🎯",
            subtitle: "Empowering manufacturers with intelligent automation",
            mission: "To revolutionize industrial automation through intelligent robotics that enhance human capabilities.",
            vision: "A future where robots handle repetitive tasks while humans focus on innovation and creativity."
          },
          solutionModules: {
            title: "ROBOT MODULES",
            subtitle: "Modular. Scalable. Automation-Ready.",
            icon: "🤖",
            description: "Deploy what you need. Scale when you grow.",
            list: [
              "Pick & Place Operations",
              "Assembly Line Automation",
              "Quality Inspection",
              "Packaging & Palletizing",
              "Machine Tending",
              "Welding & Cutting",
              "Material Handling",
              "Safety Monitoring"
            ]
          },
          usp: {
            title: "UNIQUE VALUE PROPOSITION",
            subtitle: "Why Our Robots Are Superior",
            traditionalTitle: "❌ Manual Operations",
            traditionalFeatures: [
              "Inconsistent quality output",
              "Limited working hours",
              "High labor costs",
              "Safety risks involved",
              "Slow production speed"
            ],
            visionFlowTitle: "✨ Industrial Robot Arm",
            features: [
              "6-axis precision movement",
              "AI-powered vision guidance",
              "Easy programming interface",
              "Built-in safety systems",
              "Real-time performance analytics"
            ],
            conclusion: {
              icon: "🤖",
              text: "This is not just automation.<br />This is intelligent manufacturing."
            }
          },
          flow: {
            title: "HOW ROBOT AUTOMATION WORKS",
            subtitle: "End-to-End Automation Flow",
            icon: "⚙️",
            stepIcons: ["🎯", "👁️", "🤖", "✅", "🔗"],
            conclusion: "Every movement is precise, monitored, and optimized.",
            steps: [
              {
                step: "Task Programming",
                description: "Intuitive interface for easy setup"
              },
              {
                step: "Vision Calibration",
                description: "AI-powered object recognition"
              },
              {
                step: "Automated Operation",
                description: "Precision execution of tasks"
              },
              {
                step: "Quality Verification",
                description: "Real-time inspection and feedback"
              },
              {
                step: "Data Integration",
                description: "Seamless MES/ERP connectivity"
              }
            ]
          },
          dashboard: {
            title: "ROBOT CONTROL DASHBOARD",
            subtitle: "Complete Automation Management",
            icon: "📊",
            features: [
              { icon: "🤖", text: "Real-time robot status monitoring" },
              { icon: "📈", text: "Production metrics and analytics" },
              { icon: "🔧", text: "Maintenance scheduling" },
              { icon: "⚡", text: "Performance optimization" },
              { icon: "🛡️", text: "Safety incident tracking" }
            ],
            footer: "Accessible on Web, Desktop & Mobile."
          },
          integration: {
            title: "SYSTEM INTEGRATION",
            subtitle: "Seamless Factory Connectivity",
            icon: "🔗",
            features: [
              { icon: "🏭", text: "MES system integration" },
              { icon: "💼", text: "ERP connectivity" },
              { icon: "📡", text: "SCADA system compatibility" },
              { icon: "🌐", text: "IoT sensor integration" },
              { icon: "⚙️", text: "Custom API support" }
            ],
            footer: "Connect with your existing factory systems."
          },
          whereUsed: {
            title: "WHERE ROBOTS ARE USED",
            icon: "🏭",
            list: [
              "Automotive Assembly",
              "Electronics Manufacturing",
              "Food Processing",
              "Pharmaceutical Production",
              "Metal Fabrication"
            ],
            footer: "From single-cell automation to complete factory integration."
          },
          industries: {
            title: "INDUSTRIES WE SERVE",
            icon: "🏭",
            list: [
              "Automotive",
              "Electronics",
              "Food & Beverage",
              "Pharmaceuticals",
              "Metal & Machinery",
              "Plastics",
              "Textiles",
              "Chemicals"
            ]
          },
          whyCassAIOT: {
            title: "WHY CASS AIOT",
            icon: "🏆",
            list: [
              "Industry-leading precision and reliability",
              "Proven track record in 100+ factories",
              "Comprehensive training and support",
              "Customizable solutions for specific needs",
              "ROI-focused implementation"
            ],
            conclusion: {
              icon: "🏆",
              text: "We don't just sell robots.<br />We engineer intelligent automation solutions."
            }
          },
          cta: {
            title: "Ready to automate your production line?",
            description: "Transform your factory into an intelligent automation operation with CASS Industrial Robot Arm.",
            buttons: [
              {
                text: "👉 Request a Live Demo",
                style: "primary"
              },
              {
                text: "👉 Schedule a Consultation", 
                style: "secondary"
              }
            ]
          }
        }
      ]
    }
  ]
};


  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(data);
}
