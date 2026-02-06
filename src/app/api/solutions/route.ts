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
          description: "High-precision vision sensor for industrial applications",
          image: "/images/products/vision-sensor.jpg",

          tabs: [
            {
              id: "introduction",
              name: "Introduction",
              content: [
                "CASS AIOT VisionFlow is an AI-powered, camera-first inventory automation platform designed for modern manufacturing plants, warehouses, and logistics operations.",
                "Our system eliminates manual counting, paperwork, and ERP-only dependency by using computer vision, AI, robotics, and IoT to track raw materials, work-in-progress (WIP), finished goods, and dispatch movements in real time.",
                "Unlike traditional inventory software that relies on human inputs, CASS AIOT tracks what physically moves on the factory floor, ensuring 100% accuracy, transparency, and traceability."
              ]
            },
            {
              id: "about",
              name: "Mission & Vision",
              content: {
                mission: {
                    title: "Our Mission",
                    description:
                      "To eliminate inventory inaccuracies and operational blind spots in industrial environments by replacing manual processes with real-time AI-driven automation."
                  },

                  vision: {
                    title: "Our Vision",
                    description:
                      "To become a global leader in AIOT-driven industrial automation, where every product, movement, and decision is digitally verified in real time.",
                    longTermVision:
                      "Our long-term vision is to build a fully autonomous factory ecosystem where inventory, production, quality, robotics, and logistics work together seamlessly—without human dependency."
                  },

                  goals: {
                    title: "We aim to help businesses:",
                    points: [
                      "Reduce losses",
                      "Increase operational efficiency",
                      "Make faster, data-driven decisions",
                      "Scale confidently without increasing manpower"
                    ]
                  }
                }
            },
            {
            id: "applications",
            name: "Where it is used",
            content: {
              title: "Where It Is Used",
              intro:
                "CASS AIOT Real-Time Inventory Management System is deployed in:",
              areas: [
                {
                  title: "Manufacturing Plants",
                  description: "Core deployment for production tracking"
                },
                {
                  title: "Warehouses & Distribution Centers",
                  description: "Multi-location inventory management"
                },
                {
                  title: "Conveyor-Based Production Lines",
                  description: "Real-time production monitoring"
                },
                {
                  title: "Multi-Dock Loading & Dispatch Areas",
                  description: "Automated dispatch verification"
                },
                {
                  title: "Robot-Assisted Material Handling Systems",
                  description: "Integration with robotic systems"
                }
              ],
              footer:
                "It is suitable for single-line factories as well as large multi-plant enterprises."
              }
            },
            {
              id: "features",
              name: "Features",
              content: {
                title: "Key Features",
                items: [
                  {
                    title: "Real-Time Inventory Tracking",
                    points: [
                      "Live tracking of raw materials, WIP, and finished goods",
                      "Line-wise, SKU-wise, dock-wise inventory visibility",
                      "Updates within milliseconds of physical movement"
                    ]
                  },
                  {
                    title: "AI-Based Camera Counting",
                    points: [
                      "Camera-driven object detection & counting",
                      "Eliminates barcode/RFID dependency",
                      "Handles overlapping objects, variable lighting, and high-speed conveyors"
                    ]
                  },
                  {
                    title: "Raw Material Inventory Management",
                    points: [
                      "Tracks incoming raw material movement",
                      "Consumption linked directly to production lines",
                      "Real-time raw material availability & alerts",
                      "Prevents shortages and over-stocking"
                    ]
                  },
                  {
                    title: "Production & Dispatch Automation",
                    points: [
                      "Automatic production count confirmation",
                      "Dock-wise loading verification",
                      "Route-wise and order-wise dispatch validation",
                      "Prevents wrong shipment and quantity mismatch"
                    ]
                  },
                  {
                    title: "ERP & Software Integration",
                    points: [
                      "Seamless integration with existing ERP & software",
                      "Two-way data exchange via APIs",
                      "Automatic notifications, order updates, inventory sync",
                      "No need to replace existing systems"
                    ]
                  },
                  {
                    title: "Smart Alerts & Notifications",
                    points: [
                      "Low stock alerts",
                      "Over/under dispatch warnings",
                      "Production stoppage alerts",
                      "System & camera health alerts"
                    ]
                  },
                  {
                    title: "Role-Based Dashboards",
                    points: [
                      "Admin, Supervisor, Operator access",
                      "Live camera view with counts",
                      "Shift-wise and line-wise analytics",
                      "Full audit trail and traceability"
                    ]
                  }
                ]
              }
            },
            {
              id: "benefits",
              name: "Benefits",
              content: {
                title: "Benefits",
                categories: [
                  {
                    title: "Operational Benefits",
                    points: [
                      "Eliminates manual inventory counting",
                      "Reduces dependency on manpower by 60–80%",
                      "Improves dispatch accuracy",
                      "Reduces pilferage and losses"
                    ]
                  },
                  {
                    title: "Business Benefits",
                    points: [
                      "Accurate real-time decision making",
                      "Faster order fulfillment",
                      "Lower operational costs",
                      "Improved customer trust and compliance"
                    ]
                  },
                  {
                    title: "Technology Benefits",
                    points: [
                      "Works with existing infrastructure",
                      "On-premise, cloud, or hybrid deployment",
                      "Scalable from 1 camera to 1000+ cameras",
                      "Future-ready for robotics and AI expansion"
                    ]
                  }
                ]
              }
            }
          ]
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
          description: "6-axis robotic arm for automation",
          image: "/images/products/robot-arm.jpg",

          tabs: [
            {
              id: "introduction",
              name: "Introduction",
              content: [
                "CASS AIOT VisionFlow is an AI-powered, camera-first inventory automation platform designed for modern manufacturing plants, warehouses, and logistics operations.",
                "Our system eliminates manual counting, paperwork, and ERP-only dependency by using computer vision, AI, robotics, and IoT to track raw materials, work-in-progress (WIP), finished goods, and dispatch movements in real time.",
                "Unlike traditional inventory software that relies on human inputs, <strong>CASS AIOT tracks what physically moves on the factory floor</strong>, ensuring <strong>100% accuracy, transparency, and traceability</strong>."
              ]
            },
            {
              id: "about",
              name: "Mission & Vision",
              content: {
                mission: {
                    title: "Our Mission",
                    description:
                      "To eliminate inventory inaccuracies and operational blind spots in industrial environments by replacing manual processes with real-time AI-driven automation."
                  },

                  vision: {
                    title: "Our Vision",
                    description:
                      "To become a global leader in AIOT-driven industrial automation, where every product, movement, and decision is digitally verified in real time.",
                    longTermVision:
                      "Our long-term vision is to build a fully autonomous factory ecosystem where inventory, production, quality, robotics, and logistics work together seamlessly—without human dependency."
                  },

                  goals: {
                    title: "We aim to help businesses:",
                    points: [
                      "Reduce losses",
                      "Increase operational efficiency",
                      "Make faster, data-driven decisions",
                      "Scale confidently without increasing manpower"
                    ]
                  }
                }
            },
            {
            id: "applications",
            name: "Where it is used",
            content: {
              title: "Where It Is Used",
              intro:
                "CASS AIOT Real-Time Inventory Management System is deployed in:",
              areas: [
                {
                  title: "Manufacturing Plants",
                  description: "Core deployment for production tracking"
                },
                {
                  title: "Warehouses & Distribution Centers",
                  description: "Multi-location inventory management"
                },
                {
                  title: "Conveyor-Based Production Lines",
                  description: "Real-time production monitoring"
                },
                {
                  title: "Multi-Dock Loading & Dispatch Areas",
                  description: "Automated dispatch verification"
                },
                {
                  title: "Robot-Assisted Material Handling Systems",
                  description: "Integration with robotic systems"
                }
              ],
              footer:
                "It is suitable for single-line factories as well as large multi-plant enterprises."
              }
            },
            {
              id: "features",
              name: "Features",
              content: {
                title: "Key Features",
                items: [
                  {
                    title: "Real-Time Inventory Tracking",
                    points: [
                      "Live tracking of raw materials, WIP, and finished goods",
                      "Line-wise, SKU-wise, dock-wise inventory visibility",
                      "Updates within milliseconds of physical movement"
                    ]
                  },
                  {
                    title: "AI-Based Camera Counting",
                    points: [
                      "Camera-driven object detection & counting",
                      "Eliminates barcode/RFID dependency",
                      "Handles overlapping objects, variable lighting, and high-speed conveyors"
                    ]
                  },
                  {
                    title: "Raw Material Inventory Management",
                    points: [
                      "Tracks incoming raw material movement",
                      "Consumption linked directly to production lines",
                      "Real-time raw material availability & alerts",
                      "Prevents shortages and over-stocking"
                    ]
                  },
                  {
                    title: "Production & Dispatch Automation",
                    points: [
                      "Automatic production count confirmation",
                      "Dock-wise loading verification",
                      "Route-wise and order-wise dispatch validation",
                      "Prevents wrong shipment and quantity mismatch"
                    ]
                  },
                  {
                    title: "ERP & Software Integration",
                    points: [
                      "Seamless integration with existing ERP & software",
                      "Two-way data exchange via APIs",
                      "Automatic notifications, order updates, inventory sync",
                      "No need to replace existing systems"
                    ]
                  },
                  {
                    title: "Smart Alerts & Notifications",
                    points: [
                      "Low stock alerts",
                      "Over/under dispatch warnings",
                      "Production stoppage alerts",
                      "System & camera health alerts"
                    ]
                  },
                  {
                    title: "Role-Based Dashboards",
                    points: [
                      "Admin, Supervisor, Operator access",
                      "Live camera view with counts",
                      "Shift-wise and line-wise analytics",
                      "Full audit trail and traceability"
                    ]
                  }
                ]
              }
            },
            {
              id: "benefits",
              name: "Benefits",
              content: {
                title: "Benefits",
                categories: [
                  {
                    title: "Operational Benefits",
                    points: [
                      "Eliminates manual inventory counting",
                      "Reduces dependency on manpower by 60–80%",
                      "Improves dispatch accuracy",
                      "Reduces pilferage and losses"
                    ]
                  },
                  {
                    title: "Business Benefits",
                    points: [
                      "Accurate real-time decision making",
                      "Faster order fulfillment",
                      "Lower operational costs",
                      "Improved customer trust and compliance"
                    ]
                  },
                  {
                    title: "Technology Benefits",
                    points: [
                      "Works with existing infrastructure",
                      "On-premise, cloud, or hybrid deployment",
                      "Scalable from 1 camera to 1000+ cameras",
                      "Future-ready for robotics and AI expansion"
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};


  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(data);
}
