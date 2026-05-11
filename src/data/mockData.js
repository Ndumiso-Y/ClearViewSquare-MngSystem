// ─── TENANTS ────────────────────────────────────────────────────────────────
export const tenants = [
  { id:1, store:"Pick n Pay Express", unit:"A01", category:"Grocery", contact:"Sipho Dlamini", phone:"083 211 4400", rent:22000, leaseEnd:"2025-12-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:2, store:"Clicks Pharmacy", unit:"A02", category:"Pharmacy", contact:"Zanele Mokoena", phone:"014 592 1100", rent:18500, leaseEnd:"2026-03-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:3, store:"Identity Fashion", unit:"A03", category:"Clothing", contact:"Thabo Sithole", phone:"083 776 5500", rent:9500, leaseEnd:"2025-09-30", payStatus:"Overdue", compStatus:"Expiring Soon" },
  { id:4, store:"KFC", unit:"B01", category:"Fast Food", contact:"Maria Ferreira", phone:"014 594 3300", rent:14000, leaseEnd:"2026-06-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:5, store:"Steers", unit:"B02", category:"Fast Food", contact:"Johan van der Berg", phone:"083 445 2211", rent:11000, leaseEnd:"2026-01-31", payStatus:"Pending", compStatus:"Compliant" },
  { id:6, store:"Vodacom Shop", unit:"B03", category:"Cellphones", contact:"Kefilwe Nkosi", phone:"014 592 0088", rent:13500, leaseEnd:"2025-11-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:7, store:"MTN Shop", unit:"B04", category:"Cellphones", contact:"Lucky Mahlangu", phone:"083 887 6650", rent:12000, leaseEnd:"2026-04-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:8, store:"Foschini", unit:"C01", category:"Clothing", contact:"Sandra Botha", phone:"014 593 7700", rent:16000, leaseEnd:"2026-08-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:9, store:"Truworths", unit:"C02", category:"Clothing", contact:"Nomsa Zulu", phone:"083 321 9900", rent:15000, leaseEnd:"2025-10-31", payStatus:"Overdue", compStatus:"Missing Docs" },
  { id:10, store:"Jet Stores", unit:"C03", category:"Clothing", contact:"Deon Pretorius", phone:"083 654 0011", rent:10000, leaseEnd:"2026-05-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:11, store:"Capitec ATM", unit:"D01", category:"Banking", contact:"N/A (Automated)", phone:"0860 10 20 43", rent:4500, leaseEnd:"2027-01-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:12, store:"Standard Bank ATM", unit:"D02", category:"Banking", contact:"N/A (Automated)", phone:"0860 12 34 56", rent:4500, leaseEnd:"2027-01-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:13, store:"Glamour Hair Salon", unit:"D03", category:"Hair & Beauty", contact:"Portia Mabena", phone:"083 101 5544", rent:6500, leaseEnd:"2025-08-31", payStatus:"Partial", compStatus:"Expiring Soon" },
  { id:14, store:"Studio 88", unit:"E01", category:"Footwear", contact:"Tshepo Ramokgopa", phone:"014 594 8823", rent:9000, leaseEnd:"2026-02-28", payStatus:"Paid", compStatus:"Compliant" },
  { id:15, store:"Shoe City", unit:"E02", category:"Footwear", contact:"Anna Coetzee", phone:"083 756 3310", rent:8500, leaseEnd:"2026-07-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:16, store:"Pep Stores", unit:"E03", category:"Clothing", contact:"Bongani Khumalo", phone:"014 591 2244", rent:8000, leaseEnd:"2026-03-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:17, store:"Hungry Lion", unit:"F01", category:"Fast Food", contact:"Grace Mokwena", phone:"083 229 4455", rent:9500, leaseEnd:"2025-12-31", payStatus:"Pending", compStatus:"Compliant" },
  { id:18, store:"Debonairs Pizza", unit:"F02", category:"Fast Food", contact:"Riaan Harmse", phone:"014 592 6677", rent:10000, leaseEnd:"2026-01-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:19, store:"Builders Warehouse Express", unit:"G01", category:"Hardware", contact:"Marius du Plessis", phone:"083 542 7700", rent:19000, leaseEnd:"2026-09-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:20, store:"Russells Furniture", unit:"G02", category:"Furniture", contact:"Charity Molefi", phone:"014 593 5511", rent:14000, leaseEnd:"2026-06-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:21, store:"OK Liquor", unit:"H01", category:"Liquor", contact:"Werner Joubert", phone:"083 874 2233", rent:11000, leaseEnd:"2025-11-30", payStatus:"Overdue", compStatus:"Expiring Soon" },
  { id:22, store:"Nedbank Branch", unit:"H02", category:"Banking", contact:"Fatima Adams", phone:"010 234 5678", rent:18000, leaseEnd:"2027-06-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:23, store:"Sanlam Kiosk", unit:"H03", category:"Financial Services", contact:"Pierre Venter", phone:"083 310 9988", rent:7500, leaseEnd:"2026-04-30", payStatus:"Paid", compStatus:"Compliant" },
  { id:24, store:"Nando's", unit:"I01", category:"Restaurant", contact:"Lerato Seale", phone:"014 594 0033", rent:13000, leaseEnd:"2026-10-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:25, store:"CNA Stationery", unit:"I02", category:"Stationery", contact:"Helen Swart", phone:"083 667 4422", rent:8000, leaseEnd:"2026-03-31", payStatus:"Paid", compStatus:"Compliant" },
  { id:26, store:"The Fix Shoes", unit:"I03", category:"Footwear", contact:"Mpho Tau", phone:"083 445 8800", rent:7500, leaseEnd:"2025-09-30", payStatus:"Paid", compStatus:"Compliant" },
];

// ─── INVOICES ────────────────────────────────────────────────────────────────
export const invoices = [
  { id:"INV-2024-001", tenant:"Pick n Pay Express", period:"Apr 2024", amount:22000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-03" },
  { id:"INV-2024-002", tenant:"Clicks Pharmacy", period:"Apr 2024", amount:18500, due:"2024-04-05", status:"Paid", paidDate:"2024-04-04" },
  { id:"INV-2024-003", tenant:"Identity Fashion", period:"Apr 2024", amount:9500, due:"2024-04-05", status:"Overdue", paidDate:null },
  { id:"INV-2024-004", tenant:"KFC", period:"Apr 2024", amount:14000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-05" },
  { id:"INV-2024-005", tenant:"Steers", period:"Apr 2024", amount:11000, due:"2024-04-05", status:"Pending", paidDate:null },
  { id:"INV-2024-006", tenant:"Vodacom Shop", period:"Apr 2024", amount:13500, due:"2024-04-05", status:"Paid", paidDate:"2024-04-02" },
  { id:"INV-2024-007", tenant:"Truworths", period:"Apr 2024", amount:15000, due:"2024-04-05", status:"Overdue", paidDate:null },
  { id:"INV-2024-008", tenant:"Glamour Hair Salon", period:"Apr 2024", amount:6500, due:"2024-04-05", status:"Partial", paidDate:"2024-04-06" },
  { id:"INV-2024-009", tenant:"OK Liquor", period:"Apr 2024", amount:11000, due:"2024-04-05", status:"Overdue", paidDate:null },
  { id:"INV-2024-010", tenant:"Hungry Lion", period:"Apr 2024", amount:9500, due:"2024-04-05", status:"Pending", paidDate:null },
  { id:"INV-2024-011", tenant:"Foschini", period:"Apr 2024", amount:16000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-04" },
  { id:"INV-2024-012", tenant:"Nando's", period:"Apr 2024", amount:13000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-05" },
  { id:"INV-2024-013", tenant:"Nedbank Branch", period:"Apr 2024", amount:18000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-01" },
  { id:"INV-2024-014", tenant:"Studio 88", period:"Apr 2024", amount:9000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-03" },
  { id:"INV-2024-015", tenant:"Builders Warehouse Express", period:"Apr 2024", amount:19000, due:"2024-04-05", status:"Paid", paidDate:"2024-04-02" },
];

// ─── MAINTENANCE ─────────────────────────────────────────────────────────────
export const maintenance = [
  { id:"MNT-001", issue:"Parking lot lights not working – Section B", location:"Parking – Section B", reportedBy:"Security Guard", priority:"High", assignedTo:"ElecTech Solutions", status:"In Progress", cost:4500, date:"2024-04-01" },
  { id:"MNT-002", issue:"Gents bathroom plumbing leak – Block A", location:"Block A Bathroom", reportedBy:"Cleaner – Thandi", priority:"Urgent", assignedTo:"PlumbRight CC", status:"Awaiting Contractor", cost:2800, date:"2024-04-02" },
  { id:"MNT-003", issue:"Broken floor tile near main entrance", location:"Main Entrance", reportedBy:"Centre Manager", priority:"Medium", assignedTo:"TileWorks SA", status:"Reported", cost:1200, date:"2024-04-03" },
  { id:"MNT-004", issue:"Security camera offline – Camera 7", location:"Food Court", reportedBy:"Security Supervisor", priority:"High", assignedTo:"SecureVision", status:"In Progress", cost:3500, date:"2024-03-28" },
  { id:"MNT-005", issue:"Waste area overflow – back of complex", location:"Waste Bay – Rear", reportedBy:"Tenant – KFC", priority:"Medium", assignedTo:"CleanUp Co", status:"Completed", cost:800, date:"2024-03-25" },
  { id:"MNT-006", issue:"Shop signage flickering – Truworths", location:"Unit C02", reportedBy:"Tenant – Truworths", priority:"Low", assignedTo:"SignCraft Rustenburg", status:"Reported", cost:1500, date:"2024-04-04" },
  { id:"MNT-007", issue:"Aircon unit faulty – Admin office", location:"Admin Office", reportedBy:"Admin Manager", priority:"Medium", assignedTo:"CoolAir Services", status:"Awaiting Contractor", cost:5200, date:"2024-04-01" },
  { id:"MNT-008", issue:"Gate motor service – East entrance", location:"East Entrance Gate", reportedBy:"Security Guard", priority:"High", assignedTo:"Autogate NW", status:"In Progress", cost:3800, date:"2024-03-30" },
  { id:"MNT-009", issue:"Pothole in parking – Section C", location:"Parking – Section C", reportedBy:"Tenant – Pick n Pay", priority:"Medium", assignedTo:"RoadFix NW", status:"Reported", cost:7500, date:"2024-04-05" },
  { id:"MNT-010", issue:"Fire exit sign broken – Block G", location:"Block G Corridor", reportedBy:"Centre Manager", priority:"Urgent", assignedTo:"SafeSign CC", status:"In Progress", cost:900, date:"2024-04-02" },
  { id:"MNT-011", issue:"Landscaping – front garden overgrown", location:"Front Garden", reportedBy:"Admin Assistant", priority:"Low", assignedTo:"GreenThumb NW", status:"Completed", cost:1800, date:"2024-03-22" },
  { id:"MNT-012", issue:"Water heater not working – staff bathroom", location:"Staff Room", reportedBy:"Admin Manager", priority:"Medium", assignedTo:"PlumbRight CC", status:"Completed", cost:2200, date:"2024-03-18" },
];

// ─── INVENTORY ────────────────────────────────────────────────────────────────
export const inventory = [
  { id:1, item:"Industrial Mop Heads", category:"Cleaning Supplies", stock:8, minRequired:15, supplier:"CleanMart SA", lastPurchased:"2024-03-10", status:"Low Stock" },
  { id:2, item:"Bleach (5L)", category:"Cleaning Supplies", stock:24, minRequired:20, supplier:"CleanMart SA", lastPurchased:"2024-03-20", status:"In Stock" },
  { id:3, item:"Toilet Paper Rolls (bulk)", category:"Bathroom Supplies", stock:120, minRequired:100, supplier:"PaperWorks CC", lastPurchased:"2024-04-01", status:"In Stock" },
  { id:4, item:"Hand Soap Dispensers", category:"Bathroom Supplies", stock:2, minRequired:8, supplier:"HygieneFirst", lastPurchased:"2024-02-15", status:"Reorder Needed" },
  { id:5, item:"LED Bulbs (18W)", category:"Electrical", stock:35, minRequired:30, supplier:"ElecTech Solutions", lastPurchased:"2024-03-15", status:"In Stock" },
  { id:6, item:"Extension Cables (10m)", category:"Electrical", stock:4, minRequired:10, supplier:"ElecTech Solutions", lastPurchased:"2024-01-20", status:"Reorder Needed" },
  { id:7, item:"CCTV Camera Mounts", category:"Security Equipment", stock:3, minRequired:5, supplier:"SecureVision", lastPurchased:"2024-03-05", status:"Low Stock" },
  { id:8, item:"Walkie-Talkie Batteries", category:"Security Equipment", stock:0, minRequired:12, supplier:"SecureVision", lastPurchased:"2024-02-10", status:"Reorder Needed" },
  { id:9, item:"A4 Paper Reams", category:"Office Supplies", stock:22, minRequired:20, supplier:"CNA Wholesale", lastPurchased:"2024-03-28", status:"In Stock" },
  { id:10, item:"Printer Cartridges (Black)", category:"Office Supplies", stock:2, minRequired:5, supplier:"CNA Wholesale", lastPurchased:"2024-03-01", status:"Reorder Needed" },
  { id:11, item:"Bin Liners (100L pack)", category:"Cleaning Supplies", stock:45, minRequired:40, supplier:"CleanMart SA", lastPurchased:"2024-04-02", status:"In Stock" },
  { id:12, item:"Entrance Mat (heavy duty)", category:"Maintenance Supplies", stock:1, minRequired:3, supplier:"FloorPro NW", lastPurchased:"2023-11-10", status:"Replacement Needed" },
  { id:13, item:"Paint (white, 20L)", category:"Maintenance Supplies", stock:6, minRequired:4, supplier:"Builders Express", lastPurchased:"2024-02-28", status:"In Stock" },
  { id:14, item:"Padlocks (80mm)", category:"Security Equipment", stock:7, minRequired:10, supplier:"LockMaster", lastPurchased:"2024-03-12", status:"Low Stock" },
  { id:15, item:"First Aid Kits", category:"Safety", stock:3, minRequired:6, supplier:"MediCare SA", lastPurchased:"2023-12-05", status:"Reorder Needed" },
  { id:16, item:"Fire Extinguishers (CO2)", category:"Safety", stock:12, minRequired:10, supplier:"SafeGuard NW", lastPurchased:"2024-01-15", status:"In Stock" },
  { id:17, item:"Signage (Wet Floor)", category:"Signage & Fixtures", stock:8, minRequired:10, supplier:"SignCraft Rustenburg", lastPurchased:"2024-02-20", status:"Low Stock" },
  { id:18, item:"Visitor Log Books", category:"Office Supplies", stock:5, minRequired:4, supplier:"CNA Wholesale", lastPurchased:"2024-03-15", status:"In Stock" },
  { id:19, item:"Parking Cones", category:"Signage & Fixtures", stock:18, minRequired:20, supplier:"RoadFix NW", lastPurchased:"2024-03-08", status:"Low Stock" },
  { id:20, item:"Cleaning Trolleys", category:"Cleaning Supplies", stock:2, minRequired:4, supplier:"CleanMart SA", lastPurchased:"2023-10-10", status:"Replacement Needed" },
];

// ─── STAFF ───────────────────────────────────────────────────────────────────
export const staff = [
  { id:1, name:"Nomvula Sithole", role:"Centre Manager", dept:"Management", shift:"Day (07:00–16:00)", phone:"083 200 1100", attendance:"Present", tasks:["Morning operations review","Tenant meeting – KFC","Weekly report submission"] },
  { id:2, name:"Bongani Lekgoane", role:"Finance/Admin Clerk", dept:"Finance", shift:"Day (08:00–17:00)", phone:"083 311 2233", attendance:"Present", tasks:["Process April invoices","Follow up on overdue accounts","Update expense tracker"] },
  { id:3, name:"Thandi Mahlangu", role:"Admin Assistant", dept:"Admin", shift:"Day (08:00–17:00)", phone:"083 455 6677", attendance:"Present", tasks:["Receive deliveries","Visitor log maintenance","Email correspondence"] },
  { id:4, name:"Sipho Mokgadi", role:"Security Guard", dept:"Security", shift:"Day (06:00–18:00)", phone:"083 567 7788", attendance:"Present", tasks:["Main gate monitoring","Parking enforcement","Incident log update"] },
  { id:5, name:"Precious Khumalo", role:"Security Guard", dept:"Security", shift:"Day (06:00–18:00)", phone:"083 678 8899", attendance:"Present", tasks:["CCTV monitoring","Tenant access control"] },
  { id:6, name:"David Seane", role:"Security Guard", dept:"Security", shift:"Night (18:00–06:00)", phone:"083 789 9900", attendance:"Off Duty", tasks:["Night patrol","Gate locking"] },
  { id:7, name:"Keitumetse Molefe", role:"Security Supervisor", dept:"Security", shift:"Day (07:00–19:00)", phone:"083 891 0011", attendance:"Present", tasks:["Security team briefing","Camera system check","Incident report review"] },
  { id:8, name:"Lindiwe Dube", role:"Cleaner", dept:"Facilities", shift:"Morning (05:30–13:30)", phone:"083 902 1122", attendance:"Present", tasks:["Bathroom cleaning – Block A/B","Entrance mopping","Waste bin emptying"] },
  { id:9, name:"Joseph Moalusi", role:"Cleaner", dept:"Facilities", shift:"Morning (05:30–13:30)", phone:"083 013 2233", attendance:"Late", tasks:["Parking area litter pick","Food court sweep","Passage cleaning"] },
  { id:10, name:"Patricia Nkwe", role:"Cleaner", dept:"Facilities", shift:"Afternoon (13:00–21:00)", phone:"083 124 3344", attendance:"Off Duty", tasks:["Evening common area clean","Bathroom restocking"] },
  { id:11, name:"Andile Zwane", role:"Maintenance Assistant", dept:"Facilities", shift:"Day (07:00–16:00)", phone:"083 235 4455", attendance:"Present", tasks:["MNT-002 plumbing assist","MNT-008 gate motor supervision","Tool inventory check"] },
  { id:12, name:"Refilwe Mathole", role:"Maintenance Supervisor", dept:"Facilities", shift:"Day (07:00–16:00)", phone:"083 346 5566", attendance:"Present", tasks:["Contractor coordination – PlumbRight","MNT-010 fire sign urgent","Maintenance schedule review"] },
];

// ─── COMPLIANCE ───────────────────────────────────────────────────────────────
export const compliance = [
  { id:1, item:"Fire Safety Certificate", relatedTo:"ClearView Square Complex", category:"Fire Safety", expiry:"2024-06-30", status:"Expiring Soon", responsible:"Nomvula Sithole" },
  { id:2, item:"Public Liability Insurance", relatedTo:"ClearView Square Complex", category:"Insurance", expiry:"2024-12-31", status:"Compliant", responsible:"Bongani Lekgoane" },
  { id:3, item:"Liquor Licence – OK Liquor", relatedTo:"OK Liquor (H01)", category:"Tenant Documents", expiry:"2024-05-31", status:"Expiring Soon", responsible:"Werner Joubert" },
  { id:4, item:"Lease Agreement – Identity Fashion", relatedTo:"Identity Fashion (A03)", category:"Lease Agreements", expiry:"2025-09-30", status:"Compliant", responsible:"Nomvula Sithole" },
  { id:5, item:"Health & Safety Compliance Audit", relatedTo:"ClearView Square Complex", category:"Health and Safety", expiry:"2024-04-30", status:"Overdue", responsible:"Refilwe Mathole" },
  { id:6, item:"Municipal Business Licence", relatedTo:"ClearView Square Complex", category:"Municipal Documents", expiry:"2025-02-28", status:"Compliant", responsible:"Nomvula Sithole" },
  { id:7, item:"Lease Agreement – Glamour Hair Salon", relatedTo:"Glamour Hair Salon (D03)", category:"Lease Agreements", expiry:"2025-08-31", status:"Compliant", responsible:"Nomvula Sithole" },
  { id:8, item:"POPIA Compliance Policy", relatedTo:"ClearView Square Complex", category:"POPIA / Data Protection", expiry:"2024-08-31", status:"Missing", responsible:"Bongani Lekgoane" },
  { id:9, item:"Electrical Compliance Certificate (CoC)", relatedTo:"ClearView Square Complex", category:"Fire Safety", expiry:"2024-07-15", status:"Expiring Soon", responsible:"Refilwe Mathole" },
  { id:10, item:"Employer Registration – UIF/SARS", relatedTo:"ClearView Square Complex", category:"Municipal Documents", expiry:"2025-03-31", status:"Compliant", responsible:"Bongani Lekgoane" },
];

// ─── FINANCE TRANSACTIONS ─────────────────────────────────────────────────────
export const transactions = [
  { id:1, date:"2024-04-01", description:"Rent – Nedbank Branch", category:"Rental Income", amount:18000, type:"Income", status:"Cleared" },
  { id:2, date:"2024-04-01", description:"Rent – Pick n Pay Express", category:"Rental Income", amount:22000, type:"Income", status:"Cleared" },
  { id:3, date:"2024-04-02", description:"Rent – Vodacom Shop", category:"Rental Income", amount:13500, type:"Income", status:"Cleared" },
  { id:4, date:"2024-04-02", description:"Security services – April", category:"Security", amount:28000, type:"Expense", status:"Cleared" },
  { id:5, date:"2024-04-03", description:"Rent – Clicks Pharmacy", category:"Rental Income", amount:18500, type:"Income", status:"Cleared" },
  { id:6, date:"2024-04-03", description:"Cleaning staff wages – April", category:"Cleaning", amount:18500, type:"Expense", status:"Cleared" },
  { id:7, date:"2024-04-04", description:"Rent – KFC", category:"Rental Income", amount:14000, type:"Income", status:"Cleared" },
  { id:8, date:"2024-04-04", description:"Electricity bill – Eskom", category:"Utilities", amount:42000, type:"Expense", status:"Cleared" },
  { id:9, date:"2024-04-04", description:"Rent – Foschini", category:"Rental Income", amount:16000, type:"Income", status:"Cleared" },
  { id:10, date:"2024-04-05", description:"Maintenance – PlumbRight CC", category:"Maintenance", amount:2800, type:"Expense", status:"Pending" },
  { id:11, date:"2024-04-05", description:"Rent – Nando's", category:"Rental Income", amount:13000, type:"Income", status:"Cleared" },
  { id:12, date:"2024-04-05", description:"Water & Rates – Rustenburg LM", category:"Utilities", amount:14200, type:"Expense", status:"Cleared" },
  { id:13, date:"2024-04-05", description:"Parking income – April", category:"Parking", amount:8500, type:"Income", status:"Cleared" },
  { id:14, date:"2024-04-06", description:"Maintenance – ElecTech Solutions", category:"Maintenance", amount:4500, type:"Expense", status:"Pending" },
  { id:15, date:"2024-04-06", description:"Office supplies restock", category:"Admin", amount:1850, type:"Expense", status:"Cleared" },
];

// ─── CHART DATA ───────────────────────────────────────────────────────────────
export const monthlyFinance = [
  { month:"Nov", income:168000, expenses:92000 },
  { month:"Dec", income:175000, expenses:98000 },
  { month:"Jan", income:162000, expenses:95000 },
  { month:"Feb", income:171000, expenses:88000 },
  { month:"Mar", income:180000, expenses:101000 },
  { month:"Apr", income:186500, expenses:111850 },
];

export const maintenanceByStatus = [
  { status:"Completed", count:3 },
  { status:"In Progress", count:4 },
  { status:"Awaiting Contractor", count:2 },
  { status:"Reported", count:3 },
];

export const invoiceOverview = [
  { name:"Paid", value:161000 },
  { name:"Overdue", value:35500 },
  { name:"Pending", value:20500 },
  { name:"Partial", value:6500 },
];

export const expenseBreakdown = [
  { name:"Utilities", value:56200 },
  { name:"Security", value:28000 },
  { name:"Cleaning", value:18500 },
  { name:"Maintenance", value:7300 },
  { name:"Admin", value:1850 },
];
