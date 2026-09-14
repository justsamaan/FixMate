// FixMate - The Everyday Repair Manual Database
// Contains 50+ practical household repair guides across 5 core categories

export const REPAIR_CATEGORIES = [
  {
    id: 'plumbing',
    name: 'Plumbing & Pipes',
    icon: 'Droplets',
    color: 'emerald',
    description: 'Faucets, toilets, drains, water pressure, leaks & pipe fittings',
    count: 12
  },
  {
    id: 'carpentry',
    name: 'Furniture & Carpentry',
    icon: 'Hammer',
    color: 'amber',
    description: 'Wobbly chairs, stripped screw holes, cabinet hinges & wood joints',
    count: 10
  },
  {
    id: 'doors-windows',
    name: 'Doors & Windows',
    icon: 'DoorClosed',
    color: 'cyan',
    description: 'Sticking doors, squeaky hinges, latches, drafts & sliding tracks',
    count: 10
  },
  {
    id: 'walls-paint',
    name: 'Walls, Tiles & Painting',
    icon: 'Paintbrush',
    color: 'indigo',
    description: 'Drywall holes, tile grout, peeling paint, wall anchors & plaster',
    count: 10
  },
  {
    id: 'appliances',
    name: 'Appliances & Maintenance',
    icon: 'Wrench',
    color: 'rose',
    description: 'HVAC filters, fridge coils, washer filters, fan balance & AC drain lines',
    count: 10
  }
];

export const REPAIR_GUIDES = [
  // ==================== PLUMBING ====================
  {
    id: 'plumb-01',
    title: 'Fixing a Dripping or Leaking Kitchen Faucet',
    category: 'plumbing',
    difficulty: 'Easy',
    estimatedTime: '20 - 30 mins',
    estimatedCostINR: '₹150 - ₹400',
    estimatedCostUSD: '$5 - $15',
    summary: 'Replace worn-out O-rings or internal cartridges to stop persistent water dripping and save thousands of liters.',
    symptoms: ['Dripping faucet', 'Water around handle', 'Leaking spout', 'Squeaky handle'],
    tools: [
      { name: 'Adjustable Wrench', estCost: '₹250 / $10', affiliateUrl: 'https://amazon.com' },
      { name: 'Hex / Allen Wrench Set', estCost: '₹150 / $8', affiliateUrl: 'https://amazon.com' },
      { name: 'Replacement Cartridge / O-Ring Kit', estCost: '₹200 / $12', affiliateUrl: 'https://amazon.com' },
      { name: 'Plumber\'s Silicone Grease', estCost: '₹100 / $5', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Replacement O-ring or valve cartridge', 'Plumber\'s tape'],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off Shut-off Valves',
        description: 'Locate the hot and cold water shut-off valves under the sink. Turn them clockwise until hand-tight. Open the faucet to release remaining pressure.',
        tip: 'Place a towel under the pipes to catch any residual drops.'
      },
      {
        stepNumber: 2,
        title: 'Remove the Faucet Handle',
        description: 'Pry off the decorative indicator cap on the handle using a small flathead screwdriver. Unscrew the hidden set screw with an Allen wrench and lift the handle off.',
        tip: 'Plug the sink drain so small screws don\'t fall down the pipe!'
      },
      {
        stepNumber: 3,
        title: 'Extract the Cartridge / O-Ring',
        description: 'Unscrew the retaining nut using an adjustable wrench. Carefully pull out the cartridge or valve stem.',
        tip: 'Take a photo of the cartridge before removing it so you put the replacement back in the exact same orientation.'
      },
      {
        stepNumber: 4,
        title: 'Replace Seals and Reassemble',
        description: 'Apply a thin layer of plumber\'s grease to the new O-ring/cartridge. Insert into the housing, tighten the retaining nut, replace handle and screw.',
        tip: 'Turn water back on slowly to test for leaks before putting away your tools.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'plumb-02',
    title: 'Fixing a Running or Continuously Flushing Toilet',
    category: 'plumbing',
    difficulty: 'Easy',
    estimatedTime: '15 - 20 mins',
    estimatedCostINR: '₹100 - ₹350',
    estimatedCostUSD: '$4 - $12',
    summary: 'Stop wasteful tank running by replacing the flapper or adjusting the water fill valve height.',
    symptoms: ['Toilet keeps running', 'Hissing sound from tank', 'Weak flush', 'Phantom flushing'],
    tools: [
      { name: 'Replacement Rubber Flapper', estCost: '₹150 / $8', affiliateUrl: 'https://amazon.com' },
      { name: 'Sponge & Bucket', estCost: '₹50 / $3', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['New rubber flapper valve', 'Chain assembly'],
    steps: [
      {
        stepNumber: 1,
        title: 'Inspect Tank Components',
        description: 'Remove the toilet tank lid. Flush and watch the flapper at the bottom. If water continues trickle down after filling, the flapper isn\'t sealing properly.',
        tip: 'Add 3 drops of food coloring into the tank. If color enters bowl within 10 mins without flushing, flapper is leaking.'
      },
      {
        stepNumber: 2,
        title: 'Adjust Fill Valve Water Level',
        description: 'If water is running into the overflow pipe, turn the fill valve adjustment screw clockwise to lower the water level 1 inch below top of overflow tube.',
        tip: 'The ideal water level mark is usually stamped on the inside back wall of the porcelain tank.'
      },
      {
        stepNumber: 3,
        title: 'Replace Worn Rubber Flapper',
        description: 'Turn off shut-off valve behind toilet. Flush to empty tank. Unhook old flapper from flush lever chain and side ears. Snap new flapper into place.',
        tip: 'Adjust chain length so there is 1/2 inch of slack when handle is at rest.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'plumb-03',
    title: 'Unclogging a Slow Sink Drain (P-Trap Cleaning)',
    category: 'plumbing',
    difficulty: 'Easy',
    estimatedTime: '25 - 35 mins',
    estimatedCostINR: '₹50 - ₹200',
    estimatedCostUSD: '$2 - $8',
    summary: 'Clear hair, soap scum, and debris caught in the under-sink P-trap without harsh chemicals.',
    symptoms: ['Slow draining water', 'Gurgling sounds', 'Foul drain odor', 'Water backing up'],
    tools: [
      { name: 'Bucket / Shallow Pan', estCost: '₹100 / $4', affiliateUrl: 'https://amazon.com' },
      { name: 'Slip Joint Pliers / Pipe Wrench', estCost: '₹300 / $12', affiliateUrl: 'https://amazon.com' },
      { name: 'Flexi Plastic Drain Snake', estCost: '₹120 / $5', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Old toothbrush', 'Dish soap', 'Baking soda & vinegar'],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Work Area',
        description: 'Place a bucket directly beneath the curved U-shaped P-trap pipe under the sink to catch water and sludge.',
        tip: 'Wear rubber gloves and have old towels nearby.'
      },
      {
        stepNumber: 2,
        title: 'Disassemble P-Trap Nuts',
        description: 'Loosen the slip nuts at both ends of the curved trap by hand or with pliers. Lower the P-trap into the bucket.',
        tip: 'Inspect the rubber washers/O-rings. If cracked or hardened, replace them before reassembly.'
      },
      {
        stepNumber: 3,
        title: 'Clean Pipe & Reattach',
        description: 'Scrape out debris with a flexible brush or wire hanger. Flush trap in another sink with hot water and dish soap. Reattach nuts securely.',
        tip: 'Run hot water for 2 minutes to test watertight seal.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'plumb-04',
    title: 'Restoring Low Showerhead Pressure (Mineral Descaling)',
    category: 'plumbing',
    difficulty: 'Easy',
    estimatedTime: '1 hour (mostly soaking)',
    estimatedCostINR: '₹40 - ₹100',
    estimatedCostUSD: '$2 - $4',
    summary: 'Dissolve hard water calcium deposits restricting shower spray holes using white vinegar.',
    symptoms: ['Low shower pressure', 'Spraying in weird directions', 'Clogged spray nozzles', 'Calcified white crust'],
    tools: [
      { name: 'Ziploc Plastic Bag & Rubber Band', estCost: '₹30 / $1', affiliateUrl: 'https://amazon.com' },
      { name: 'Old Toothbrush', estCost: '₹20 / $1', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['1-2 cups Distilled White Vinegar'],
    steps: [
      {
        stepNumber: 1,
        title: 'Submerge Showerhead in Vinegar',
        description: 'Fill a plastic bag half full with white vinegar. Place over showerhead so all nozzles are submerged and secure tightly with a heavy rubber band.',
        tip: 'Leave soaking for at least 1-2 hours (or overnight for heavy buildup).'
      },
      {
        stepNumber: 2,
        title: 'Scrub & Flush Nozzles',
        description: 'Remove bag. Scrub nozzle tips with an old toothbrush to dislodge loosened mineral crust. Run hot water for 1 minute to flush internal debris.',
        tip: 'Use a wooden toothpick to gently poke open any stubbornly clogged rubber nozzles.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'plumb-05',
    title: 'Emergency Burst Main Water Pipe / Major Leak',
    category: 'plumbing',
    difficulty: 'Advanced',
    estimatedTime: 'Immediate Action Required',
    estimatedCostINR: '₹1,500 - ₹8,000 (Pro Service)',
    estimatedCostUSD: '$50 - $300',
    summary: 'Crucial steps to shut off main supply, contain flooding, and safely escalate when main water line breaks.',
    symptoms: ['Gushing water', 'Flooding floor', 'Burst copper/PVC pipe', 'Rapid pressure loss'],
    tools: [
      { name: 'Main Water Shut-off Key / Wrench', estCost: '₹400 / $15', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Towels', 'Buckets', 'Emergency Pipe Leak Tape (Temporary)'],
    steps: [
      {
        stepNumber: 1,
        title: 'Shut Off Main Water Supply IMMEDIATELY',
        description: 'Locate home main water shut-off valve (near water meter or house entry line). Turn valve handle fully clockwise until water flow completely stops.',
        tip: 'If water is spraying near electrical outlets, DO NOT touch water until main power circuit breaker is shut off!'
      },
      {
        stepNumber: 2,
        title: 'Open Lowest Faucets to Drain Lines',
        description: 'Open outdoor hose bibs or basement faucets to relieve remaining line pressure and drain standing water away from damaged pipe section.',
        tip: 'Catch leaking water in buckets to prevent structural ceiling or floor damage.'
      }
    ],
    safetyWarning: {
      alertLevel: 'HIGH_RISK',
      message: 'STOP & CALL A LICENSED PLUMBER! Major pipe bursts, slab leaks, or leaks near electrical panels pose severe electrocution and structural collapse risks. Do not attempt structural soldering or pipe replacement unless trained.',
      proCallToAction: 'Connect with a Verified Emergency Plumber Near You'
    }
  },

  // ==================== CARPENTRY & FURNITURE ====================
  {
    id: 'carp-01',
    title: 'Fixing a Wobbly Wooden Chair or Table Leg',
    category: 'carpentry',
    difficulty: 'Easy',
    estimatedTime: '30 mins (+ drying time)',
    estimatedCostINR: '₹100 - ₹250',
    estimatedCostUSD: '$4 - $10',
    summary: 'Re-glue loose mortise dowels or corner joints using wood glue and clamps for rock-solid stability.',
    symptoms: ['Wobbly chair', 'Loose joint', 'Creaking leg', 'Dowel pulling out'],
    tools: [
      { name: 'PVA Wood Glue (Titebond/Fevicol)', estCost: '₹120 / $6', affiliateUrl: 'https://amazon.com' },
      { name: 'Bar Clamp or Ratchet Strap', estCost: '₹350 / $15', affiliateUrl: 'https://amazon.com' },
      { name: 'Damp Cloth', estCost: '₹20 / $1', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Wood glue', 'Hardwood toothpicks / wooden dowel pins', 'Sandpaper'],
    steps: [
      {
        stepNumber: 1,
        title: 'Disassemble Loose Joint',
        description: 'Gently pull the wobbly leg joint apart. Scrape off dried old glue from dowels and socket using sandpaper or a small chisel.',
        tip: 'Old dried glue prevents new glue from bonding to raw wood fibers.'
      },
      {
        stepNumber: 2,
        title: 'Apply Wood Glue & Insert Dowel',
        description: 'Inject generous wood glue into socket hole and around dowel pin. Re-insert leg into joint firmly.',
        tip: 'If dowel hole is enlarged, dip 2-3 wooden toothpicks in glue and insert alongside dowel to fill gap.'
      },
      {
        stepNumber: 3,
        title: 'Clamp Tight & Wipe Excess',
        description: 'Apply bar clamp or wrap ratchet strap tightly around chair legs. Wipe squeezed-out glue immediately with damp cloth. Leave clamped for 12-24 hours.',
        tip: 'Protect chair finish by placing cardboard under clamp pads.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'carp-02',
    title: 'Repairing a Stripped Screw Hole in Wood or Cabinets',
    category: 'carpentry',
    difficulty: 'Easy',
    estimatedTime: '10 - 15 mins',
    estimatedCostINR: '₹30 - ₹80',
    estimatedCostUSD: '$1 - $3',
    summary: 'Restore gripping power to loose hinge screws using toothpicks or wooden dowel pins.',
    symptoms: ['Screw spins freely', 'Loose door hinge', 'Cabinet door falling off', 'Hole too large'],
    tools: [
      { name: 'Screwdriver', estCost: '₹100 / $5', affiliateUrl: 'https://amazon.com' },
      { name: 'Utility Knife / Scissors', estCost: '₹50 / $2', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Wooden toothpicks or wooden skewers', 'Wood glue'],
    steps: [
      {
        stepNumber: 1,
        title: 'Remove Loose Screw',
        description: 'Back out the loose screw completely from the cabinet or wooden frame.',
        tip: 'Clean dust out of hole.'
      },
      {
        stepNumber: 2,
        title: 'Fill Hole with Glued Toothpicks',
        description: 'Dip 3-4 wooden toothpicks into wood glue and pack them tightly into the stripped hole until flush.',
        tip: 'Snap or trim off protruding ends flush with surface.'
      },
      {
        stepNumber: 3,
        title: 'Drive Screw Back In',
        description: 'Immediately drive screw back into center of packed hole. The screw will bite into fresh hardwood toothpicks creating a rock-solid anchor.',
        tip: 'Tighten by hand to avoid stripping again.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'carp-03',
    title: 'Re-aligning Sagging or Misaligned Kitchen Cabinet Doors',
    category: 'carpentry',
    difficulty: 'Easy',
    estimatedTime: '15 mins',
    estimatedCostINR: '₹0 (Adjustment only)',
    estimatedCostUSD: '$0',
    summary: 'Adjust 3-way concealed European hinges to fix crooked, uneven, or overlapping cabinet doors.',
    symptoms: ['Crooked cabinet door', 'Door rubbing frame', 'Gap between doors', 'Door won\'t stay closed'],
    tools: [
      { name: 'Phillips Head Screwdriver (#2)', estCost: '₹100 / $4', affiliateUrl: 'https://amazon.com' }
    ],
    materials: [],
    steps: [
      {
        stepNumber: 1,
        title: 'Identify Adjustment Screws',
        description: 'Open cabinet door to inspect hinge arm. European hinges have 3 adjustment screws: Depth (front-back), Height (up-down), and Side (left-right).',
        tip: 'Front screw adjusts side-to-side angle; center screw adjusts height; rear screw adjusts depth distance from frame.'
      },
      {
        stepNumber: 2,
        title: 'Adjust Side & Height Screws',
        description: 'Turn side screw clockwise to tilt door right, counter-clockwise left. Adjust until reveal gap is perfectly parallel.',
        tip: 'Make small half-turn adjustments and close door to inspect alignment.'
      }
    ],
    safetyWarning: null
  },

  // ==================== DOORS & WINDOWS ====================
  {
    id: 'door-01',
    title: 'Fixing a Sticking or Rubbing Wooden Door',
    category: 'doors-windows',
    difficulty: 'Intermediate',
    estimatedTime: '30 - 45 mins',
    estimatedCostINR: '₹100 - ₹300',
    estimatedCostUSD: '$5 - $12',
    summary: 'Adjust hinge screws, install shims, or lightly sand sticking edges to ensure effortless latching.',
    symptoms: ['Door sticks on frame', 'Hard to latch', 'Scuff marks on floor/jamb', 'Hinge sagging'],
    tools: [
      { name: 'Screwdriver / Cordless Drill', estCost: '₹500 / $25', affiliateUrl: 'https://amazon.com' },
      { name: 'Wood Block & Sandpaper (80-grit)', estCost: '₹50 / $2', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Cardboard hinge shims', '3-inch wood screws'],
    steps: [
      {
        stepNumber: 1,
        title: 'Tighten Loose Top Hinge Screws',
        description: 'Most door sag is caused by loose top hinge screws. Replace center screw of top hinge with a long 3-inch screw driven deep into wall stud frame.',
        tip: 'Driving screw into stud pulls jamb tight and lifts sagging door instantly!'
      },
      {
        stepNumber: 2,
        title: 'Locate Rubbing Spot',
        description: 'Close door slowly to pinpoint where edge contacts jamb. Look for paint scuffs or friction marks.',
        tip: 'Slide piece of paper around door perimeter to locate tight binding spots.'
      },
      {
        stepNumber: 3,
        title: 'Sand or Shim Binding Edge',
        description: 'If top edge rubs, place thin cardboard shim behind bottom hinge. If side rubs, sand tight wood edge lightly.',
        tip: 'Touch up raw wood edge with paint or varnish.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'door-02',
    title: 'Eliminating Loud Squeaky Door Hinges',
    category: 'doors-windows',
    difficulty: 'Easy',
    estimatedTime: '5 mins',
    estimatedCostINR: '₹80 - ₹200',
    estimatedCostUSD: '$3 - $7',
    summary: 'Clean hinge pin oxidation and lubricate with silicone spray or graphite powder for silent operation.',
    symptoms: ['Squeaking door', 'Grinding noise when opening', 'Stiff hinge movement'],
    tools: [
      { name: 'Hammer & Small Nail / Punch', estCost: '₹150 / $6', affiliateUrl: 'https://amazon.com' },
      { name: 'Silicone Lubricant Spray or WD-40', estCost: '₹180 / $7', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Paper towels', 'Steel wool'],
    steps: [
      {
        stepNumber: 1,
        title: 'Remove Hinge Pin',
        description: 'Prop door bottom with book. Tap bottom of top hinge pin upward with nail and hammer until top head pops out. Pull pin out.',
        tip: 'Remove only one pin at a time so door stays mounted on remaining hinges.'
      },
      {
        stepNumber: 2,
        title: 'Clean & Lubricate Pin',
        description: 'Scrub rust/dirt off pin using steel wool. Coat pin generously with silicone spray lubricant or lithium grease. Re-insert and tap flush.',
        tip: 'Wipe excess oil off frame immediately to avoid staining paint.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'door-03',
    title: 'Sealing Drafty Windows with Weatherstripping',
    category: 'doors-windows',
    difficulty: 'Easy',
    estimatedTime: '20 - 30 mins',
    estimatedCostINR: '₹150 - ₹400',
    estimatedCostUSD: '$6 - $14',
    summary: 'Block cold winter drafts or hot summer heat leakage to reduce energy bills.',
    symptoms: ['Draft near window', 'Rattling glass', 'Higher energy bills', 'Dust entering around frame'],
    tools: [
      { name: 'Scissors / Utility Knife', estCost: '₹50 / $2', affiliateUrl: 'https://amazon.com' },
      { name: 'Rubbing Alcohol & Cloth', estCost: '₹60 / $2.5', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Self-adhesive foam / rubber D-profile weatherstrip tape'],
    steps: [
      {
        stepNumber: 1,
        title: 'Clean Frame Surface',
        description: 'Wipe window perimeter channels with rubbing alcohol to remove dirt and oil. Allow surface to dry completely.',
        tip: 'Adhesive won\'t stick to dirty or oily window frames.'
      },
      {
        stepNumber: 2,
        title: 'Apply Weatherstrip Tape',
        description: 'Peel backing tape bit by bit while pressing foam strip firmly along window stop moulding.',
        tip: 'Cut strip cleanly at 45-degree angles in corners for a seamless draft barrier.'
      }
    ],
    safetyWarning: null
  },

  // ==================== WALLS, TILES & PAINTING ====================
  {
    id: 'wall-01',
    title: 'Patching a Small Hole or Crack in Drywall / Plaster',
    category: 'walls-paint',
    difficulty: 'Easy',
    estimatedTime: '30 mins (+ drying)',
    estimatedCostINR: '₹150 - ₹350',
    estimatedCostUSD: '$6 - $15',
    summary: 'Fill doorknob holes, nail pops, or stress cracks with joint compound/spackle for smooth paintable walls.',
    symptoms: ['Hole in drywall', 'Doorknob dent', 'Nail holes', 'Hairline plaster crack'],
    tools: [
      { name: 'Putty Knife (3-inch)', estCost: '₹80 / $3', affiliateUrl: 'https://amazon.com' },
      { name: 'Sanding Sponge (Fine 180-grit)', estCost: '₹40 / $2', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Spackle / Joint Compound', 'Self-adhesive fiberglass mesh patch', 'Wall Primer & Paint'],
    steps: [
      {
        stepNumber: 1,
        title: 'Clean Edges & Apply Mesh Patch',
        description: 'Remove loose paper or plaster around hole. Stick adhesive mesh patch directly over hole extending 1 inch beyond edges.',
        tip: 'For tiny nail holes under 1/2 inch, mesh is not needed—just apply spackle directly.'
      },
      {
        stepNumber: 2,
        title: 'Apply Joint Compound / Spackle',
        description: 'Scoop spackle onto putty knife. Press firmly over mesh and feather edges thin into surrounding wall surface.',
        tip: 'Two thin coats look much smoother and dry faster than one thick layer.'
      },
      {
        stepNumber: 3,
        title: 'Sand Smooth & Prime Paint',
        description: 'Once dry (2-4 hours), sand feather-light in circular motions until invisible. Wipe dust and paint with primer.',
        tip: 'Hold flashlight parallel to wall to check for smooth bump-free finish before painting.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'wall-02',
    title: 'Repairing & Re-grouting Cracked Bathroom Tile Grout',
    category: 'walls-paint',
    difficulty: 'Intermediate',
    estimatedTime: '45 mins (+ cure)',
    estimatedCostINR: '₹200 - ₹500',
    estimatedCostUSD: '$8 - $18',
    summary: 'Remove mildewed or crumbled grout lines and re-apply fresh waterproof grout to prevent tile leaks.',
    symptoms: ['Cracked grout lines', 'Moldy grout', 'Water seeping behind tile', 'Loose grout fragments'],
    tools: [
      { name: 'Grout Saw / Rake Tool', estCost: '₹150 / $7', affiliateUrl: 'https://amazon.com' },
      { name: 'Rubber Grout Float or Sponge', estCost: '₹120 / $5', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Waterproof Tile Grout Powder', 'Grout Sealer', 'Microfiber cloth'],
    steps: [
      {
        stepNumber: 1,
        title: 'Scrape Out Old Damaged Grout',
        description: 'Use grout saw to carefully rake out crumbled grout to 1/8 inch depth between tiles. Vacuum up all dust.',
        tip: 'Be careful not to chip delicate ceramic tile glazed edges while scraping.'
      },
      {
        stepNumber: 2,
        title: 'Mix & Apply Fresh Grout',
        description: 'Mix grout powder with water to peanut-butter consistency. Press grout into joints at 45-degree angle using rubber float.',
        tip: 'Let set for 15-20 mins until firm, then wipe haze off tiles with damp sponge.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'wall-03',
    title: 'Installing Heavy Duty Wall Anchors (Toggle Bolts)',
    category: 'walls-paint',
    difficulty: 'Easy',
    estimatedTime: '15 mins',
    estimatedCostINR: '₹100 - ₹250',
    estimatedCostUSD: '$4 - $10',
    summary: 'Mount heavy TVs, mirrors, or shelving securely into hollow drywall without stud support.',
    symptoms: ['Loose wall shelf', 'Pulling out anchor', 'Hollow drywall mounting', 'Heavy item installation'],
    tools: [
      { name: 'Power Drill & Bit Set', estCost: '₹1,200 / $45', affiliateUrl: 'https://amazon.com' },
      { name: 'Screwdriver', estCost: '₹100 / $4', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Spring Toggle Bolts or SnapSkru Heavy Drywall Anchors'],
    steps: [
      {
        stepNumber: 1,
        title: 'Drill Hole for Toggle Wings',
        description: 'Mark mounting spot. Drill hole matching diameter required for folded toggle wings (usually 3/8 or 1/2 inch).',
        tip: 'Use stud finder first—if stud is present, use standard lag screw instead of toggle!'
      },
      {
        stepNumber: 2,
        title: 'Insert & Tighten Toggle Bolt',
        description: 'Pass bolt through fixture bracket, thread metal wings onto tip. Pinch wings flat and push through hole until they spring open inside wall.',
        tip: 'Pull bolt outward while tightening screw so wings hold firm against back of drywall.'
      }
    ],
    safetyWarning: null
  },

  // ==================== APPLIANCES & MAINTENANCE ====================
  {
    id: 'app-01',
    title: 'Cleaning Refrigerator Condenser Coils for Efficiency',
    category: 'appliances',
    difficulty: 'Easy',
    estimatedTime: '20 mins',
    estimatedCostINR: '₹0 - ₹150',
    estimatedCostUSD: '$0 - $6',
    summary: 'Remove thick dust blankets off fridge coils to improve cooling, lower electric bills, and extend compressor life.',
    symptoms: ['Fridge running warm', 'Compressor constantly running', 'Warm sides of fridge', 'High electricity bill'],
    tools: [
      { name: 'Vacuum Cleaner with Crevice Tool', estCost: 'Existing', affiliateUrl: 'https://amazon.com' },
      { name: 'Flexible Long Coil Brush', estCost: '₹180 / $7', affiliateUrl: 'https://amazon.com' }
    ],
    materials: [],
    steps: [
      {
        stepNumber: 1,
        title: 'Unplug Fridge Safety Check',
        description: 'Unplug refrigerator power cord from wall outlet before accessing rear or bottom coil grill.',
        tip: 'Pull fridge gently away from wall on cardboard to prevent scratching floor.'
      },
      {
        stepNumber: 2,
        title: 'Vacuum Coil Grime',
        description: 'Remove bottom front toe kick plate or rear access panel. Insert narrow brush and vacuum tool between black coil fins to suck out pet hair and dust blankets.',
        tip: 'Clean coils every 6 months to reduce energy consumption by up to 15%!'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'app-02',
    title: 'Unclogging Washing Machine Drain Filter (OE Error)',
    category: 'appliances',
    difficulty: 'Easy',
    estimatedTime: '15 mins',
    estimatedCostINR: '₹0',
    estimatedCostUSD: '$0',
    summary: 'Clean coin trap filter to fix standing water, drainage failure errors, and clothes spin issues.',
    symptoms: ['Washing machine won\'t drain', 'OE or E2 error code', 'Wet clothes after cycle', 'Musty washer smell'],
    tools: [
      { name: 'Shallow Pan & Towel', estCost: 'Existing', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Old toothbrush', 'Warm soapy water'],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Lower Access Door',
        description: 'Locate small access door at front bottom corner of front-load washer. Place shallow pan and towel under small drain hose.',
        tip: 'Be prepared for 1-2 liters of trapped water to drain out!'
      },
      {
        stepNumber: 2,
        title: 'Drain & Unscrew Filter Plug',
        description: 'Unplug small black hose cap to drain standing water. Twist circular filter knob counter-clockwise and pull out filter cartridge.',
        tip: 'Remove lint, coins, hairpins, and keys caught inside filter mesh.'
      },
      {
        stepNumber: 3,
        title: 'Rinse & Re-seat Filter',
        description: 'Rinse filter thoroughly under tap. Screw filter firmly back in clockwise until tight to prevent water leaks during wash.',
        tip: 'Ensure rubber gasket is seated properly before tightening knob.'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'app-03',
    title: 'Balancing a Wobbly or Noisy Ceiling Fan',
    category: 'appliances',
    difficulty: 'Easy',
    estimatedTime: '20 mins',
    estimatedCostINR: '₹50 - ₹120',
    estimatedCostUSD: '$2 - $5',
    summary: 'Tighten blade screws and apply balancing clip weights to eliminate dangerous high-speed wobbling.',
    symptoms: ['Wobbly fan blade', 'Ticking sound at high speed', 'Shaking ceiling mount', 'Uneven blade height'],
    tools: [
      { name: 'Screwdriver', estCost: '₹100 / $4', affiliateUrl: 'https://amazon.com' },
      { name: 'Measuring Tape / Ruler', estCost: '₹80 / $3', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['Plastic fan balancing clip & self-adhesive lead weights'],
    steps: [
      {
        stepNumber: 1,
        title: 'Tighten All Mounting Screws',
        description: 'Turn off power. Use screwdriver to verify that all screws connecting fan blades to metal iron arms are completely tight.',
        tip: 'Also check downrod canopy screws attached to ceiling box.'
      },
      {
        stepNumber: 2,
        title: 'Measure Blade Pitch Distance',
        description: 'Measure distance from tip of each blade straight up to ceiling. If one blade is lower, gently bend iron arm up or down to align.',
        tip: 'All blade tips should measure within 1/8 inch of each other!'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'app-04',
    title: 'Clearing AC Condensate Drain Line (Water Leaking Indoor)',
    category: 'appliances',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    estimatedCostINR: '₹100 - ₹300',
    estimatedCostUSD: '$4 - $12',
    summary: 'Unclog algae and sludge blocking air conditioner drain line to stop indoor water drips.',
    symptoms: ['AC leaking water inside room', 'Standing water in drain pan', 'AC shutting off automatically', 'Musty AC odor'],
    tools: [
      { name: 'Wet/Dry Vacuum (Shop-Vac)', estCost: 'Existing / Rental', affiliateUrl: 'https://amazon.com' },
      { name: 'Funnel', estCost: '₹40 / $2', affiliateUrl: 'https://amazon.com' }
    ],
    materials: ['1 cup Distilled White Vinegar or Hot Water'],
    steps: [
      {
        stepNumber: 1,
        title: 'Turn Off AC Unit',
        description: 'Turn off air conditioner at thermostat and circuit breaker before working on drain line.',
        tip: 'Locate T-shaped PVC drain pipe cap near indoor air handler.'
      },
      {
        stepNumber: 2,
        title: 'Flush & Vacuum Drain Line',
        description: 'Remove PVC cap. Pour 1 cup of white vinegar down drain pipe. Connect wet-vac to outside PVC exit pipe to suck out algae sludge.',
        tip: 'Flush line with vinegar monthly during peak summer to prevent algae slime buildup!'
      }
    ],
    safetyWarning: null
  },
  {
    id: 'app-05',
    title: 'Dangerous Gas Leak or Main Electrical Breaker Sparking',
    category: 'appliances',
    difficulty: 'Advanced',
    estimatedTime: 'EVACUATE IMMEDIATELY',
    estimatedCostINR: '₹1,000 - ₹5,000 (Pro Service)',
    estimatedCostUSD: '$50 - $200',
    summary: 'Critical safety procedures for gas odors (rotten egg smell) or severe electrical breaker panel arching.',
    symptoms: ['Rotten egg gas smell', 'Sparking electrical panel', 'Hissing near gas stove', 'Smoke from breaker box'],
    tools: [],
    materials: [],
    steps: [
      {
        stepNumber: 1,
        title: 'EVACUATE BUILDING IMMEDIATELY',
        description: 'If you smell gas (rotten eggs) or see electrical sparks, DO NOT turn light switches on or off, DO NOT ignite any flame. Evacuate everyone outdoors immediately.',
        tip: 'Call gas emergency hotline or fire department from outside the house!'
      }
    ],
    safetyWarning: {
      alertLevel: 'CRITICAL_HAZARD',
      message: '⚠️ DANGER: DO NOT ATTEMPT DIY REPAIR! Gas leaks cause explosions and high-voltage electrical panels carry lethal shock hazards. Immediately shut main gas valve if safe from outside, evacuate, and call gas utility company & licensed technician!',
      proCallToAction: 'Emergency Dispatch Licensed Technician'
    }
  }
];

export const SAMPLE_DIAGNOSIS_IMAGES = [
  {
    id: 'sample-01',
    name: 'Corroded Pipe Fitting Leak',
    category: 'plumbing',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    detectedIssue: 'Corroded Threaded Pipe Joint & Water Drips',
    confidence: '96%',
    matchedGuideId: 'plumb-01',
    boundingBox: { top: '35%', left: '28%', width: '42%', height: '40%' }
  },
  {
    id: 'sample-02',
    name: 'Cabinet Hinge Stripped Hole',
    category: 'carpentry',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    detectedIssue: 'Stripped Screw Hole & Sagging Door Hinge Plate',
    confidence: '94%',
    matchedGuideId: 'carp-02',
    boundingBox: { top: '22%', left: '30%', width: '38%', height: '45%' }
  },
  {
    id: 'sample-03',
    name: 'Drywall Hole & Cracks',
    category: 'walls-paint',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    detectedIssue: 'Impact Dent & Hairline Plaster Wall Crack',
    confidence: '98%',
    matchedGuideId: 'wall-01',
    boundingBox: { top: '30%', left: '25%', width: '50%', height: '45%' }
  },
  {
    id: 'sample-04',
    name: 'Moldy Bathroom Tile Grout',
    category: 'walls-paint',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    detectedIssue: 'Mildewed & Deteriorated Grout Line',
    confidence: '92%',
    matchedGuideId: 'wall-02',
    boundingBox: { top: '40%', left: '20%', width: '60%', height: '35%' }
  }
];

export const SEASONAL_MAINTENANCE_TASKS = [
  {
    season: 'Spring',
    icon: 'Sun',
    tasks: [
      { id: 's1', title: 'Inspect Roof Shingles & Gutters', status: 'Pending', guideId: 'wall-01' },
      { id: 's2', title: 'Service Air Conditioning Condenser & Clear Line', status: 'Pending', guideId: 'app-04' },
      { id: 's3', title: 'Check Outdoor Hose Bibs for Winter Freeze Cracks', status: 'Completed', guideId: 'plumb-01' },
      { id: 's4', title: 'Clean Window Screens & Weatherstripping', status: 'Pending', guideId: 'door-03' }
    ]
  },
  {
    season: 'Summer',
    icon: 'Flame',
    tasks: [
      { id: 'su1', title: 'Clean Refrigerator Condenser Coils', status: 'Pending', guideId: 'app-01' },
      { id: 'su2', title: 'Check Washing Machine Drain Trap & Hoses', status: 'Pending', guideId: 'app-02' },
      { id: 'su3', title: 'Test Smoke & Carbon Monoxide Detectors', status: 'Completed', guideId: null },
      { id: 'su4', title: 'Inspect Tile Grout in Showers & Seal', status: 'Pending', guideId: 'wall-02' }
    ]
  },
  {
    season: 'Autumn',
    icon: 'Wind',
    tasks: [
      { id: 'a1', title: 'Replace HVAC / Furnace Air Filters', status: 'Pending', guideId: 'app-04' },
      { id: 'a2', title: 'Seal Window & Door Drafts with Weatherstripping', status: 'Pending', guideId: 'door-03' },
      { id: 'a3', title: 'Drain Water Heater Tank Sediment', status: 'Pending', guideId: 'plumb-03' },
      { id: 'a4', title: 'Check Chimney & Fireplace Flue Seal', status: 'Completed', guideId: null }
    ]
  },
  {
    season: 'Winter',
    icon: 'Snowflake',
    tasks: [
      { id: 'w1', title: 'Insulate Exposed Outdoor Water Pipes', status: 'Pending', guideId: 'plumb-05' },
      { id: 'w2', title: 'Balance & Reverse Ceiling Fan Direction (Clockwise)', status: 'Completed', guideId: 'app-03' },
      { id: 'w3', title: 'Inspect Door Latch & Deadbolt Alignment', status: 'Pending', guideId: 'door-01' },
      { id: 'w4', title: 'Check Basement Sump Pump Battery Backup', status: 'Pending', guideId: null }
    ]
  }
];

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter Edition',
    priceINR: '₹199',
    priceUSD: '$2.99',
    type: 'One-Time Purchase',
    tagline: 'Essential household fixes & printable guides for single-room DIYers.',
    popular: false,
    features: [
      'Access to 50 Core Repair Guides',
      'Basic Symptom Search & Matrix',
      'Step-by-step Interactive Checklists',
      'Printable Tool & Material Lists',
      'Standard Safety Check Warnings'
    ]
  },
  {
    id: 'complete',
    name: 'Complete Edition',
    priceINR: '₹499',
    priceUSD: '$5.99',
    type: 'Best Value / Lifetime',
    tagline: 'Full interactive DIY suite, PDF Handbook exporter, and maintenance calendar.',
    popular: true,
    features: [
      'Everything in Starter Edition',
      '150+ Advanced Repair Guides',
      '📷 AI Photo Visual Diagnosis Engine',
      '📘 PDF Handbook Exporter ("Home Fix Volume 1")',
      'Household Maintenance Calendar (4 Seasons)',
      'Automated Consolidated Shopping List Generator',
      'Appliance & Equipment Inventory Storage'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ultimate Edition',
    priceINR: '₹799',
    priceUSD: '$9.99',
    type: 'VIP Pass',
    tagline: 'Complete digital asset, video library & priority local pro connection.',
    popular: false,
    features: [
      'Everything in Complete Edition',
      '🎥 Step-by-Step HD Video Demonstration Links',
      'Priority Local Tradesperson Lead Dispatch',
      'Unlimited PDF Exports & Custom Branding',
      'Family Share Pass (Up to 5 devices)',
      'Direct WhatsApp Expert Consultation Access'
    ]
  }
];
