const products = [
    {
        id: "P001",
        name: "Sony WH-1000XM4 Wireless Headphones",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "183,600 RF",
            muhanga: "204,000 RF"
        }
    },
    {
        id: "P002",
        name: "Apple Watch Series 7",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "357,000 RF",
            muhanga: "387,600 RF"
        }
    },
    {
        id: "P003",
        name: "JBL Flip 5 Bluetooth Speaker",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1643173229940-0aacda0a1cfc?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "81,600 RF",
            muhanga: "91,800 RF"
        }
    },
    {
        id: "P004",
        name: "Canon EOS R6 Mirrorless Camera",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "1,224,000 RF",
            muhanga: "1,326,000 RF"
        }
    },
    {
        id: "P005",
        name: "Logitech G502 HERO Gaming Mouse",
        images: [
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1596580198220-809edd6d93a3?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "45,900 RF",
            muhanga: "56,100 RF"
        }
    },
    {
        id: "P006",
        name: "iPhone 13 Pro Max 256GB",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-161036851218e?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "816,000 RF",
            muhanga: "867,000 RF"
        }
    },
    {
        id: "P007",
        name: "iPad Air 5th Gen 64GB",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "408,000 RF",
            muhanga: "459,000 RF"
        }
    },
    {
        id: "P008",
        name: "Fitbit Charge 5 Fitness Tracker",
        images: [
            "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1591550943637-e0deffd73933?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "153,000 RF",
            muhanga: "173,400 RF"
        }
    },
    {
        id: "P009",
        name: "MacBook Air M1 256GB SSD",
        images: [
            "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1610368545638-9942965bf5d9?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1588702522634-cb9d8a3932b0?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "816,000 RF",
            muhanga: "867,000 RF"
        }
    },
    {
        id: "P010",
        name: "Apple AirPods Pro (2nd Gen)",
        images: [
            "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600",
            "https://images.unsplash.com/photo-1594983725322-1631f0309b9f?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&w=300",
        prices: {
            kigali: "153,000 RF",
            muhanga: "173,400 RF"
        }
    },
    {
        id: "P011",
        name: "Samsung T7 1TB Portable SSD",
        images: [
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1610368545638-9942965bf5d9?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "91,800 RF",
            muhanga: "102,000 RF"
        }
    },
    {
        id: "P012",
        name: "Canon EF 50mm f/1.8 STM Lens",
        images: [
            "https://images.unsplash.com/photo-1587840171670-8b850147754e?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1587840171670-8b850147754e?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "357,000 RF",
            muhanga: "387,600 RF"
        }
    },
    {
        id: "P013",
        name: "TP-Link Archer AX6000 Wi-Fi 6 Router",
        images: [
            "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1610368545638-9942965bf5d9?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "91,800 RF",
            muhanga: "102,000 RF"
        }
    },
    {
        id: "P014",
        name: "Amazon Echo Studio Smart Speaker",
        images: [
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1610368545638-9942965bf5d9?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=300&h=200",
        prices: {
            kigali: "153,000 RF",
            muhanga: "173,400 RF"
        }
    },
    {
        id: "P015",
        name: "Ray-Ban RB3025 Aviator Sunglasses",
        images: [
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=300&h=200&fit=crop",
        prices: {
            kigali: "102,000 RF",
            muhanga: "122,400 RF"
        }
    },
    {
        id: "P016",
        name: "Nikon D850 DSLR Camera",
        images: [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1587840171670-8b850147754e?auto=format&fit=crop&w=600&h=400",
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&h=400"
        ],
        thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
        prices: {
            kigali: "1,530,000 RF",
            muhanga: "1,632,000 RF"
        }
    }
];