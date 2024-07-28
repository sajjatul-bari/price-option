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
                "1 free personal training "
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
                "2 free personal training "
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
                "4 free personal training ",
                "Access to sauna and steam room",
                
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
                "8 free personal training ",
                "Access to sauna and steam room",
                
            ]
        }
    ]
    
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-center text-white mb-10">Best price in town</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                PriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;