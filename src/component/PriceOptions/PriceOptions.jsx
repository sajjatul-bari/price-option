import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions =[
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free personal training session per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "2 free personal training sessions per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "4 free personal training sessions per month",
                "Access to sauna and steam room",
                "Priority class booking"
            ]
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "8 free personal training sessions per month",
                "Access to sauna and steam room",
                "Priority class booking",
                "Monthly health and wellness consultation",
                "Exclusive VIP lounge access"
            ]
        }
    ]
    
    return (
        <div>
            <h1 className="text-3xl">Best price in town</h1>
            {
                PriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;