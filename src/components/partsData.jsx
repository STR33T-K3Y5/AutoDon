import frontBumper from '../images/FrontBumper.png';
import brakePads from '../images/BrakePads.png';
import headlight from '../images/HeadLight.png';
import rearView from '../images/RearView.png';
import airFilter from '../images/AirFilter.png';
import fuelPump from '../images/FuelPump.png';
import exhaustMuffler from '../images/ExhaustMuffler.png';
import radiator from '../images/Radiator.png';
import steeringWheel from '../images/SteeringWheel.png';
import suspensionCoil from '../images/SuspensionCoil.png';
import suspensionCoil2 from '../images/SuspensionCoil2.png';
import suspensionCoil3 from '../images/SuspensionCoil3.png';

const partsData = [
  {
    id: "P001",
    vin: "1HGCM82633A004352",
    name: "Front Bumper",
    modelNumber: "FBX-200",
    carModel: "Honda Accord 2003",
    supplier: "AutoParts Hub",
    price: 120.00,
    image: frontBumper
  },
  {
    id: "P002",
    vin: "WBA3A5C51DF594635",
    name: "Brake Pads",
    modelNumber: "BP-789",
    carModel: "BMW 3 Series 2013",
    supplier: "BrakePads",
    price: 75.50,
    image: brakePads
  },
  {
    id: "P003",
    vin: "1FTFW1EF1EKE12345",
    name: "Headlight Assembly",
    modelNumber: "HL-550",
    carModel: "Ford F-150 2014",
    supplier: "LightMasters",
    price: 180.99,
    image: headlight
  },
  {
    id: "P004",
    vin: "JH4KA8270MC000123",
    name: "Rearview Mirror",
    modelNumber: "RM-34",
    carModel: "Acura Legend 1991",
    supplier: "MirrorWorks",
    price: 55.00,
    image: rearView
  },
  {
    id: "P005",
    vin: "5NPE24AF1FH123456",
    name: "Air Filter",
    modelNumber: "AF-900",
    carModel: "Hyundai Sonata 2015",
    supplier: "CleanAir Supplies",
    price: 25.75,
    image: airFilter
  },
  {
    id: "P006",
    vin: "3FA6P0H73JR123456",
    name: "Fuel Pump",
    modelNumber: "FP-1300",
    carModel: "Ford Fusion 2018",
    supplier: "FuelTech",
    price: 210.99,
    image: fuelPump
  },
  {
    id: "P007",
    vin: "2T1BURHE0FC123456",
    name: "Exhaust Muffler",
    modelNumber: "EM-220",
    carModel: "Toyota Corolla 2015",
    supplier: "Muffler Pro",
    price: 150.00,
    image: exhaustMuffler
  },
  {
    id: "P008",
    vin: "1GCHK23167F123456",
    name: "Radiator",
    modelNumber: "RD-450",
    carModel: "Chevrolet Silverado 2007",
    supplier: "Cooling Solutions",
    price: 230.50,
    image: radiator
  },
  {
    id: "P009",
    vin: "1N4AL3AP2GC123456",
    name: "Steering Wheel",
    modelNumber: "SW-310",
    carModel: "Nissan Altima 2016",
    supplier: "SteerRight",
    price: 180.00,
    image: steeringWheel
  },
  {
    id: "P010",
    vin: "KMHTC6AD9FU123456",
    name: "Suspension Coil",
    modelNumber: "SC-700",
    carModel: "Hyundai Genesis 2015",
    supplier: "SmoothRide",
    price: 350.75,
    image: suspensionCoil
  },
  {
    id: "P011",
    vin: "KMHTC6AD9FQ1278456",
    name: "Suspension Coil",
    modelNumber: "VG-617",
    carModel: "Volkswagen Golf 2018",
    supplier: "SmoothRide",
    price: 390.75,
    image: suspensionCoil2
  },
  {
    id: "P012",
    vin: "KMHTC6AD9FW123456",
    name: "Suspension Coil",
    modelNumber: "MB-173",
    carModel: "Mercedes Benz A250 2020",
    supplier: "SmoothRide",
    price: 310.75,
    image: suspensionCoil3
  }
];

export default partsData;
