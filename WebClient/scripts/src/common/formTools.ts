import { mainModule } from "process";


export const handlePropChange = <T>(item: T, handler: (obj: T, val: string) => void) => (e: Event) => {
    const target = <HTMLInputElement>e.currentTarget;

    const newVal = target.value;

    handler(item, newVal);
}

export const handleSubmit = (f: Function) => (e: Event) => {
    e.preventDefault();

    f();

    return false;
}

export const helperFunctions = {
    
    
    priceToCurrency: (price: number | undefined) => {
        return price?.toLocaleString("en-CA", { style: "currency", currency: "CAD" }) ?? ""
    },
    
    decimalToPercentage: (decimal: number | undefined) => {
        return decimal?.toLocaleString("en", {style: "percent"}) ?? ""
    },
    
    getRandomStatus: () => {
        return Math.floor(Math.random() * (8 - 1) + 1);
    },
    
    getStatus: (status: number | undefined): String => {
        switch (status) {
            case 1: return "⏳ Pending payment";
            case 2: return "🧾 Payment received";
            case 3: return "📦 Shipped";
            case 4: return "🚚 On vehicle for delivery";
            case 5: return "✅ Delivered";
            case 6: return "❌ Canceled";
            case 7: return "↩ Returned to sender";
            default: return "No status";
        }
    }
}

export const states:string[] = ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba",
    "British Columbia", "Prince Edward Island", "Saskatchewan", "Alberta", "Newfoundland and Labrador"];
