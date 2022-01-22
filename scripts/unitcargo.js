//Don't ask where I stol-copied this code from.
const cargoT1 = extendContent(UnitType, "transporter", {
});
cargoT1.constructor = () => extend(UnitWaterMove, {
});
//register(spcAirT1);
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(cargoT1, 60 * 20, ItemStack.with(Items.copper, 10)));