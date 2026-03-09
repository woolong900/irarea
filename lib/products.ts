export interface ProductSpec {
  label: string
  values: string[]
}

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  subtitle: string
  description: string
  category: string
  features: ProductFeature[]
  specifications: ProductSpec[]
}

export const productTypes = ['uncooled-detectors', 'uncooled-modules', 'cooled-detectors', 'cooled-modules'] as const
export type ProductType = (typeof productTypes)[number]

export function getProductType(product: Product): ProductType {
  const s = product.subtitle.toLowerCase()
  const isCooled = s.includes('cooled') && !s.includes('uncooled')
  const isDetector = s.includes('detector')

  if (isCooled && isDetector) return 'cooled-detectors'
  if (isCooled) return 'cooled-modules'
  return 'uncooled-modules'
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((p) => getProductType(p) === type)
}

export const products: Product[] = [
  {
    id: 'tm256',
    name: 'TM256',
    subtitle: 'Miniature 256×192 VOx Uncooled Thermal Module',
    description:
      `TM256 is one of the TM series miniature infrared camera modules developed by ChengJing. It integrates 256×192 wafer-level-packaging infrared detector, wafer-level optical lens, micro solenoid valve shutter and supports 25°/50° field of view. With industry-standard interfaces, it is easier to be integrated into various consumer electronic products.

TM256 infrared camera module is oriented for small size, light weight & low price (SWaP) infrared thermal imaging applications but still requires better image quality. Its super miniature structure and ultralow power consumption are convenient to be integrated into various inspection tools, security monitoring cameras or handheld infrared thermal imagers with strict requirements on cost, size and weight.

Now TM series thermal imaging cores have been widely used in consumer electronics market. It's easier for TM infrared thermal imaging core to be integrated into more terminal products and greatly reduces the cost of customers.`,
    category: 'TIMO Series',
    features: [
      { title: 'Top Level Configuration', description: 'Equipped with high-precision PM motor and the thinnest solenoid valve shutter' },
      { title: 'Fast to Focus', description: 'Realize the function of near-far focal adjustment and auto focus temperature measurement' },
      { title: 'Temperature Measurement', description: 'High accuracy, customizable temperature measurement range' },
      { title: 'ITA SDK', description: 'Special software development kit, support cross-platform and rich features' },
    ],
    specifications: [
      { label: 'Model', values: ['TM256 / TM256AF'] },
      { label: 'Sensitive Material', values: ['Vanadium Oxide'] },
      { label: 'Resolution', values: ['256×192'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'FOV', values: ['56°±1° / 25°±1°'] },
      { label: 'NETD', values: ['≤50mK'] },
      { label: 'Frame Rate', values: ['25Hz (Customizable 1～30Hz)'] },
      { label: 'Focusing Mode', values: ['Free / Electric'] },
      { label: 'Temperature Measurement Range', values: ['Industrial: -20℃～550℃ / Body: 20℃～50℃'] },
      { label: 'Temperature Accuracy', values: ['Industrial: ±2℃ or ±2% / Body: ±0.5℃'] },
      { label: 'External Interface', values: ['40PIN / 50PIN'] },
      { label: 'Typical Power Consumption', values: ['≤85mW'] },
      { label: 'SDK', values: ['Android / Linux / Windows'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
      { label: 'Operating Temperature', values: ['-20℃~+70℃'] },
      { label: 'Size (mm)', values: ['15×13×6.95 / 20×15.5×15'] },
      { label: 'Weight', values: ['≤2.2g / ≤7g'] },
    ],
  },
  {
    id: 'tm120',
    name: 'TM120',
    subtitle: 'Miniature 120×90 VOx Uncooled Thermal Module',
    description:
      `TM120 is one of the TM series miniature infrared modules developed by ChengJing. It integrates optical lens, 120x90/17μm wafer level package (WLP) detector and basic image processing circuit to quickly obtain thermal images of the target area and heat distribution.

TM120 thermal imaging core is oriented for small size, light weight & low price (SWaP) infrared imaging applications. Its super miniature structure and ultralow power consumption are convenient to be integrated into various smart devices, thermal imagers or mobile terminals with strict requirements on cost, size and weight.

Now TM series thermal cores and modules have been widely used in consumer electronics market. It's easier for TIMO thermal camera core module to be integrated into more terminal products and greatly reduces the cost of customers.`,
    category: 'TIMO Series',
    features: [
      { title: 'Minimum WLP Module', description: 'Minimum WLP infrared module; size 8.5mm×8.5mm×9.16mm' },
      { title: 'DVP Interface', description: 'DVP Interface, compatible with various embedded platforms' },
      { title: 'Direct Integration', description: 'Visible camera module equivalent for directly integration' },
      { title: 'SDK Support', description: 'Provide software development kit' },
      { title: 'Ultra-low Power', description: 'Ultra-low power consumption, as low as 10mW' },
    ],
    specifications: [
      { label: 'Sensitive Material', values: ['Vanadium Oxide'] },
      { label: 'Resolution', values: ['120×90'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'NETD', values: ['≤60mK'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Size (mm)', values: ['8.5×8.5×9.16'] },
      { label: 'Power Consumption', values: ['As low as 10mW'] },
      { label: 'Interface', values: ['DVP'] },
      { label: 'Operating Temperature', values: ['-20℃~+60℃'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
    ],
  },
  {
    id: 'igs412',
    name: 'IGS412',
    subtitle: 'Shutterless Uncooled Infrared Camera Core 384×288/12μm',
    description:
      `The RF series shutterless infrared camera core does not require shutter correction during operation. It can adapt to 1500g@0.4ms strong impact environment and solve problems of jamming or noise encountered by observers.

In order to meet the personalized needs of integrators, RF series infrared camera core is equipped with multiple functions such as a reticle, external OLED, keypads and provides various video interfaces and lenses for easy integration.

The outer diameter does not exceed φ36 and bare weight is no more than 28.6g. Such a powerful performance infrared camera core truly provides first-class observation experience under limited space and load conditions.`,
    category: 'IGS Series',
    features: [
      { title: 'Shutterless Solution', description: 'No need shutter correction during use' },
      { title: 'Mute Operation', description: 'Mute operation for good concealment' },
      { title: 'Strong Impact Resistance', description: 'Impact resistance up to 1500g, duration 0.4ms' },
      { title: 'Tiny and Light', description: 'Max outer diameter≤φ36, weight ≤28.6g (bare module)' },
      { title: 'Powerful Features', description: 'Support reticle, picture in picture, keypads etc.' },
      { title: 'Multiple Interfaces', description: 'Support various video interfaces' },
      { title: 'Lens Options', description: 'Various lenses are available for different applications: manual focus/motorized lens/continuous zoom' },
    ],
    specifications: [
      { label: 'Model', values: ['RF412'] },
      { label: 'Resolution', values: ['384×288/12μm'] },
      { label: 'Spectral Response', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤30mK@f1.0/25℃'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Digital Video Format', values: ['RAW/YUV'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Pseudo Color', values: ['10 Types'] },
      { label: 'Digital Zoom', values: ['1x/2x/4x/8x'] },
      { label: 'Working Voltage', values: ['DC 2.7-5.3V'] },
      { label: 'Power Consumption', values: ['0.5W@23±3℃'] },
      { label: 'Operating Temperature', values: ['-40℃~+70℃'] },
      { label: 'Shock', values: ['1500g@0.4ms'] },
      { label: 'Size (Bare Module)', values: ['≤φ36mm'] },
      { label: 'Weight (Bare Module)', values: ['≤28.6g'] },
    ],
  },
  {
    id: 'igs612',
    name: 'IGS612',
    subtitle: 'Shutterless Uncooled Infrared Camera Core 640×512/12μm',
    description:
      `The RF series shutterless infrared camera core does not require shutter correction during operation. It can adapt to 1500g@0.4ms strong impact environment and solve problems of jamming or noise encountered by observers.

In order to meet the personalized needs of integrators, RF series infrared camera core is equipped with multiple functions such as a reticle, external OLED, keypads and provides various video interfaces and lenses for easy integration.

The outer diameter does not exceed φ36 and bare weight is no more than 28.6g. Such a powerful performance infrared camera core truly provides first-class observation experience under limited space and load conditions.`,
    category: 'IGS Series',
    features: [
      { title: 'Shutterless Solution', description: 'No need shutter correction during use' },
      { title: 'Mute Operation', description: 'Mute operation for good concealment' },
      { title: 'Strong Impact Resistance', description: 'Impact resistance up to 1500g, duration 0.4ms' },
      { title: 'Tiny and Light', description: 'Max outer diameter≤φ36, weight ≤28.6g (bare module)' },
      { title: 'Powerful Features', description: 'Support reticle, picture in picture, keypads etc.' },
      { title: 'Multiple Interfaces', description: 'Support various video interfaces' },
      { title: 'OLED Support', description: 'Support to drive various Micro OLEDs' },
      { title: 'Lens Options', description: 'Various lenses are available for different applications: manual focus/motorized lens/continuous zoom' },
    ],
    specifications: [
      { label: 'Model', values: ['RF612'] },
      { label: 'Resolution', values: ['640×512/12μm'] },
      { label: 'Spectral Response', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤30mK@f1.0/25℃'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Digital Video Format', values: ['RAW/YUV'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Pseudo Color', values: ['10 Types'] },
      { label: 'Digital Zoom', values: ['1x/2x/4x/8x'] },
      { label: 'Standard External Interface', values: ['50pin'] },
      { label: 'Digital Video Interface', values: ['DVP8/DVP16/USB2.0/LVDS/BT.656'] },
      { label: 'Working Voltage', values: ['DC 2.7-5.3V'] },
      { label: 'Power Consumption', values: ['0.5W@23±3℃'] },
      { label: 'Operating Temperature', values: ['-40℃~+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃~+85℃'] },
      { label: 'Shock', values: ['1500g@0.4ms'] },
      { label: 'Size (Bare Module)', values: ['≤φ36mm'] },
      { label: 'Weight (Bare Module)', values: ['≤28.6g'] },
      { label: 'Optional Lens', values: ['Manual Focus: 25mm/35mm/50mm', 'Fixed Focus Athermal: 19mm/25mm/35mm/50mm/70mm/100mm', 'Motorized Lens: 75mm/100mm/150mm', 'Continuous Zoom: 28~90mm/30~180mm'] },
    ],
  },
  {
    id: 'twin412',
    name: 'TWIN412',
    subtitle: 'Ceramic Package 384×288/12μm Thermal Module',
    description:
      `CR412/R thermal module is a new arrival infrared product developed by ChengJing. It uses 384×288/12μm ceramic package infrared detector. The thermal module supports 11 pseudo color in total (White Hot/Lava/Ironbow/Aqua/Hot Iron/Medical/Arctic/Rainbow1/Rainbow2/Red Hot/Black Hot). Different industries have different color palette choices.

Ceramic packaging is currently the most popular packaging technology on the market. The size, weight and power consumption of the detector can be significantly reduced.

By integrating the ceramic packaging infrared detector, the CR412/R thermal module presents clear and sharp images.

This new CR412 thermal module will give more choices for customers from various industries such as Industrial Automation, Intelligent Security, Unmanned Platform, Robot, Intelligent Hardware, Advanced Driver Assistant System, Firefighting etc.`,
    category: 'TWIN Series',
    features: [
      { title: 'Optimized Solution', description: 'Mini size: 25.4mm×25.4mm×22.0mm (without lens)' },
      { title: 'Light Weight', description: 'Light weight: as low as 20g (without lens)' },
      { title: 'Low Power', description: 'Power consumption as low as 0.8W' },
      { title: 'Outstanding Performance', description: 'Powerful image process algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'Temperature Measurement', description: 'Temperature measurement range: -20℃~150℃, 0~550℃ (customizable)' },
      { title: 'Good Stability', description: 'Good stability in various harsh environments' },
      { title: 'SDK Support', description: 'Support Windows/Linux SDK; achieve video stream analysis and conversion from gray to temperature' },
    ],
    specifications: [
      { label: 'Model', values: ['CR412/R'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Start-up Time', values: ['5s'] },
      { label: 'Digital Video', values: ['YUV/BT.656'] },
      { label: 'Image Display', values: ['11 Types (White Hot/Lava/Iron Red/etc.)'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Supply Voltage', values: ['5V±0.5V'] },
      { label: 'Typical Power Consumption', values: ['0.8W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'Operating Temperature', values: ['-40℃～+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃～+85℃'] },
      { label: 'Size (mm)', values: ['25.4×25.4×22.0 (without lens)'] },
      { label: 'Weight', values: ['20g (without lens)'] },
    ],
  },
  {
    id: 'twin612',
    name: 'TWIN612',
    subtitle: 'Ceramic Package 640×512/12μm Thermal Module',
    description:
      `CR612 thermal module is a new arrival product developed by ChengJing. It integrates 640×512/12µm ceramic package uncooled infrared detector. With typical NETD＜30mk, the CR612 thermal module could present clearer, sharper and more detailed image.

With temperature measurement range of -20℃~150℃/0~550℃, accuracy of ±2℃ or ±2% and frame rate up to 30Hz, the thermal module guarantees smooth thermal image and accurate temperature measurement.

The CR612 thermal module has the advantages of compact design, light weight structure and power consumption as low as 0.8w. With enhanced image algorithms and temperature measurement function, the CR612 thermal module presents more stable images and accurate temperature.

Ceramic packaging process is similar to metal packaging, which is a mature infrared detector packaging technology. Compared with metal packaging, the volume and weight of the packaged detector will be greatly reduced. Thus, the CR612 thermal module could be applied to industries that have strict requirements on size, weight and power consumption.`,
    category: 'TWIN Series',
    features: [
      { title: 'Optimized Solution', description: 'Mini size: 25.4mm×25.4mm×22.0mm (without lens)' },
      { title: 'Light Weight', description: 'Light weight: as low as 20g (without lens)' },
      { title: 'Low Power', description: 'Power consumption as low as 0.8W' },
      { title: 'Outstanding Performance', description: 'Powerful image process algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'Temperature Measurement', description: 'Temperature measurement range: -20℃~150℃, 0~550℃ (customizable)' },
      { title: 'Good Stability', description: 'Good stability in various harsh environments' },
      { title: 'SDK Support', description: 'Support Windows/Linux SDK; achieve video stream analysis and conversion from gray to temperature' },
    ],
    specifications: [
      { label: 'Model', values: ['CR612/R'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Start-up Time', values: ['5s'] },
      { label: 'Digital Video', values: ['YUV/BT.1120'] },
      { label: 'Image Display', values: ['11 Types (White Hot/Lava/Iron Red/etc.)'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Supply Voltage', values: ['5V±0.5V'] },
      { label: 'Typical Power Consumption', values: ['0.8W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'Operating Temperature', values: ['-40℃～+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃～+85℃'] },
      { label: 'Size (mm)', values: ['25.4×25.4×22.0 (without lens)'] },
      { label: 'Weight', values: ['20g (without lens)'] },
    ],
  },
  {
    id: 'twin1212',
    name: 'TWIN1212',
    subtitle: 'Uncooled HD 1280×1024/12µm Infrared Camera Core',
    description:
      `CR1212 uncooled infrared camera core integrates ChengJing self-developed ceramic package infrared detector, high performance signal processing circuit and brand new image algorithm to output ultra clear images and accurate temperature data. It is suitable for application scenarios with requirements of high quality image and high performance.

The CR1212 thermal module features compact design, light weight and low power consumption. With brand new image algorithm for excellent image presentation and accurate temperature measurement, the CR1212 is ideal for security monitoring, firefighting, outdoor, UAV payloads and scientific research.`,
    category: 'TWIN Series',
    features: [
      { title: 'Optimized Solution', description: 'Mini size: 33mm×33.4mm×17.6mm (bare module)' },
      { title: 'Light Weight', description: 'Weight as light as 20g (bare module)' },
      { title: 'Low Power', description: 'Power consumption as low as 1W' },
      { title: 'Outstanding Image Quality', description: 'Brand new image algorithm for excellent image presentation: NUC/3DNR/DNS/DRC/EE' },
      { title: 'Accurate Temperature Measurement', description: 'Temperature measurement range: -20℃~150℃, 0~550℃ (customizable)' },
      { title: 'High Accuracy', description: 'Temperature measurement accuracy: ±2℃ or ±2%' },
      { title: 'SDK Support', description: 'Support Android/Windows/Linux/ARM SDK; achieve video stream analysis and conversion from gray to temperature' },
      { title: 'Strong Universality', description: 'Good stability in various harsh environments' },
    ],
    specifications: [
      { label: 'Model', values: ['CR1212/R'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Start-up Time', values: ['5s'] },
      { label: 'Digital Video', values: ['YUV/BT.1120'] },
      { label: 'Image Display', values: ['11 Types (White Hot/Lava/Iron Red/etc.)'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Communication Interface', values: ['RS232/USB2.0'] },
      { label: 'Supply Voltage', values: ['5V±0.5V'] },
      { label: 'Typical Power Consumption', values: ['1W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'SDK', values: ['Android/Windows/Linux/ARM'] },
      { label: 'Operating Temperature', values: ['-40℃～+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃～+85℃'] },
      { label: 'Vibration', values: ['5.35grms, 3-axis'] },
      { label: 'Shock', values: ['Half Sine Wave, 40g/11ms'] },
      { label: 'Size (mm)', values: ['33×33.4×17.6 (Bare Module)'] },
      { label: 'Weight', values: ['20g (Bare Module)'] },
      { label: 'Optional Lens', values: ['Fixed Focus Athermal: 14mm/19mm/25mm/35mm/50mm', 'Motorized Lens: 75mm/100mm/150mm', 'Continuous Zoom: 28~90mm/30~180mm'] },
    ],
  },
  {
    id: 'plug417r',
    name: 'PLUG417R',
    subtitle: 'PG Series 384×288 Uncooled Thermal Module',
    description:
      `PG417/PG417R is one of the PG series uncooled thermal IR camera modules developed by ChengJing. It consists of 384x288/17μm uncooled infrared detector, full series of optical components, professional signal processing circuit and image processing algorithm.

PG417/PG417R is a kind of uncooled infrared thermal imaging module applied in the field of industrial thermal imaging and temperature measurement. The temperature range is customizable, which can meet the specific requirements of industrial thermography and present a clear thermal image.

We are committed to opening a new vision for industrial temperature measurement. After years of technical accumulation and practical experience in the field of infrared temperature measurement, we have provided our customers a full range of machine thermal imaging vision solutions.`,
    category: 'PLUG Series',
    features: [
      { title: 'High Sensitivity', description: 'Typical NETD<30mk, High Sensitivity' },
      { title: 'Stable Performance', description: 'Stable Performance for reliable operation' },
      { title: 'Easy Integration', description: 'Easy Integration & Plug-in design' },
      { title: 'Clear Image Quality', description: 'Clear Image Quality & Details' },
      { title: 'Customizable Range', description: 'Customizable Temperature Range' },
      { title: 'Environmental Adaptability', description: 'Strong Environmental Adaptability' },
    ],
    specifications: [
      { label: 'Model', values: ['PG417/PG417R'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Start-up Time', values: ['15s'] },
      { label: 'Analog Video', values: ['PAL/NTSC'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT656/LVDS'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Supply Voltage', values: ['4~6V'] },
      { label: 'Typical Power Consumption', values: ['1.5W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
      { label: 'Size (mm)', values: ['44.5×45.95×36.6'] },
      { label: 'Weight', values: ['90g±3g'] },
      { label: 'Optional Lens', values: ['Fixed Focus Athermal: 7.5mm/13mm/19mm/25mm'] },
    ],
  },
  {
    id: 'plug612r',
    name: 'PLUG612R',
    subtitle: 'PG Series 640×512@12μm Uncooled Thermal Module',
    description:
      `PG612/PG612R is one of the PG series uncooled infrared modules developed by ChengJing. It consists of 640x512@12μm uncooled thermal infrared detector, full series of optical components, professional signal processing circuit and image processing algorithm.

PG612/PG612R is a kind of uncooled infrared thermal imaging module applied in the field of industrial thermal imaging and temperature measurement. The temperature range is customizable, which can meet the specific requirements of industrial thermography and present a clear infrared thermal image.

We are committed to opening a new vision for industrial temperature measurement. After years of technical accumulation and practical experience in the field of infrared temperature measurement, we have provided our customers a full range of machine thermal imaging vision solutions.`,
    category: 'PLUG Series',
    features: [
      { title: 'High Sensitivity', description: 'Typical NETD<30mk, High Sensitivity' },
      { title: 'Stable Performance', description: 'Stable Performance for reliable operation' },
      { title: 'Easy Integration', description: 'Easy Integration & Plug-in design' },
      { title: 'Clear Image Quality', description: 'Clear Image Quality & Details' },
      { title: 'Customizable Range', description: 'Customizable Temperature Range' },
      { title: 'Environmental Adaptability', description: 'Strong Environmental Adaptability' },
    ],
    specifications: [
      { label: 'Model', values: ['PG612/PG612R'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Start-up Time', values: ['15s'] },
      { label: 'Analog Video', values: ['PAL/NTSC'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT656/LVDS'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Supply Voltage', values: ['4~6V'] },
      { label: 'Typical Power Consumption', values: ['1.5W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
      { label: 'Size (mm)', values: ['44.5×45.95×36.6'] },
      { label: 'Weight', values: ['90g±3g'] },
      { label: 'Optional Lens', values: ['Fixed Focus Athermal: 7.5mm/13mm/19mm/25mm/35mm'] },
    ],
  },
  {
    id: 'plug617r',
    name: 'PLUG617R',
    subtitle: 'PG Series 640×512/17μm Uncooled Thermal Module',
    description:
      `PG617/PG617R is one of the PG series uncooled thermal camera module developed by ChengJing. It consists of 640x512/17μm uncooled FPA infrared detector, full series of optical components, professional signal processing circuit and image processing algorithm.

PG617/PG617R infrared thermal sensor module is a kind of uncooled camera module applied in the field of industrial thermal imaging and temperature measurement. The temperature range is customizable, which can meet the specific requirements of industrial thermography and present a clear thermal image.

As a leading thermal camera module manufacturer, ChengJing is committed to opening a new vision for industrial temperature measurement. After years of technical accumulation and practical experience in the field of infrared temperature measurement, we have provided our customers a full range of machine thermal imaging vision solutions.`,
    category: 'PLUG Series',
    features: [
      { title: 'High Sensitivity', description: 'Typical NETD<30mk, High Sensitivity' },
      { title: 'Stable Performance', description: 'Stable Performance for reliable operation' },
      { title: 'Easy Integration', description: 'Easy Integration & Plug-in design' },
      { title: 'Clear Image Quality', description: 'Clear Image Quality & Details' },
      { title: 'Customizable Range', description: 'Customizable Temperature Range' },
      { title: 'Environmental Adaptability', description: 'Strong Environmental Adaptability' },
    ],
    specifications: [
      { label: 'Model', values: ['PG617/PG617R'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Start-up Time', values: ['15s'] },
      { label: 'Analog Video', values: ['PAL/NTSC'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT656/LVDS'] },
      { label: 'Expansion Components', values: ['USB/VPC/Cameralink/Gig-E'] },
      { label: 'Dimming Mode', values: ['Linear/Histogram/Mixed'] },
      { label: 'Digital Zoom', values: ['1~8X Continual Zoom'] },
      { label: 'Image Display', values: ['Black Hot/White Hot/Pseudo Color'] },
      { label: 'Image Algorithm', values: ['NUC/AGC/IDE'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Communication Mode', values: ['RS232-TTL, 115200bps'] },
      { label: 'Supply Voltage', values: ['4~6V'] },
      { label: 'Typical Power Consumption', values: ['1.5W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±2℃ or ±2%'] },
      { label: 'SDK', values: ['Support ARM/Windows/Linux SDK'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
      { label: 'Humidity', values: ['5%~95%, non-condensing'] },
      { label: 'Vibration', values: ['Random Vibration 5.35grms, 3 Axis'] },
      { label: 'Shock', values: ['Half-sine Wave, 40g/11ms, 3 Axis 6 Direction'] },
      { label: 'Size (mm)', values: ['44.5×45.95×36.6'] },
      { label: 'Weight', values: ['90g±3g'] },
      { label: 'Optional Lens', values: ['Fixed Focus Athermal: 7.5mm/13mm/19mm/25mm'] },
    ],
  },
  {
    id: 'plug1212r',
    name: 'PLUG1212R',
    subtitle: 'PG Series 1280×1024 Uncooled Thermal Module',
    description:
      `PG1212/PG1212R is one of the PG series uncooled infrared camera module developed by ChengJing. It is based on metal level package detector with professional signal processing circuit and image processing platform, completely transforms the target infrared radiation into temperature data. Its temperature measurement is available.

The PG1212/PG1212R thermal module is suitable for security monitoring, fire fighting, scientific research and other fields that require high resolution thermal imaging.`,
    category: 'PLUG Series',
    features: [
      { title: 'High Resolution', description: 'Pixel Size: 12μm, Resolution: 1280x1024' },
      { title: 'Wide Spectral Range', description: 'Spectra Range: 8μm -14μm' },
      { title: 'High Sensitivity', description: 'High Sensitivity: Typical NETD<50mK' },
      { title: 'Temperature Measurement', description: 'Temperature Range: -20℃~150℃, 0℃~550℃' },
    ],
    specifications: [
      { label: 'Model', values: ['PG1212/PG1212R'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['＜50mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT1120'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Standard External Interface', values: ['50pin_HRS'] },
      { label: 'Supply Voltage', values: ['5V±0.5V'] },
      { label: 'Typical Power Consumption', values: ['2W'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
    ],
  },
  {
    id: 'coin612',
    name: 'COIN612',
    subtitle: 'LH Series WLP+ASIC 640×512/12μm VOx Uncooled Thermal Module',
    description:
      `LH612 is one of the LH series infrared thermal camera cores developed by ChengJing. It adopts state-of-the-art 12μm VOx microbolometer technology and integrates 640x512 wafer level package (WLP) infrared thermal detector, high performance signal processing circuit and image processing algorithm.

The compact infrared camera core is designed for integration into handheld devices, drones and other thermal imaging equipment. It is a cost-effective and easy-to-integrate solution for customers for secondary development and integration in all kinds of infrared thermal cameras.

Also some customized OEM solutions are available to meet the requirements of customers. It is easily integrate into many kinds of devices like unmanned aerial vehicles (UAV), drones, as well as police and firefighting units.

Until now, we have provided our customers with various mature and stable infrared thermal imaging solutions. It's easier for LH series to be integrated into more terminal products and greatly reduces the cost for customers.`,
    category: 'COIN Series',
    features: [
      { title: 'Optimized Solution', description: 'Mini size: 25.4mm×25.4mm×14.1mm' },
      { title: 'Light Weight', description: 'Light Weight: as low as 11.5g' },
      { title: 'Low Power', description: 'Power consumption: as low as 0.8W' },
      { title: 'Outstanding Image Quality', description: 'New generation image processing algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'Temperature Measurement', description: 'Temperature measurement range: -20℃～150℃, 0~550℃ (support expansion & customization)' },
      { title: 'Fast Integration', description: 'USB2.0/DVP/LVDS image output interfaces, RAW/YUV image data output, serial port control' },
    ],
    specifications: [
      { label: 'Model', values: ['LH612/R'] },
      { label: 'Sensitive Material', values: ['Vanadium Oxide'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8μm~14μm'] },
      { label: 'Typical NETD', values: ['≤40mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Start-up Time', values: ['5s'] },
      { label: 'Analog Video', values: ['PAL/NTSC'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT656'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'Image Display', values: ['Black Hot/White Hot/Pseudo Color'] },
      { label: 'Standard External Interface', values: ['50Pin_HRS'] },
      { label: 'USB Expansion Board', values: ['Type-C'] },
      { label: 'Supply Voltage', values: ['4~5.5V'] },
      { label: 'Typical Power Consumption', values: ['0.8W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Temperature Accuracy', values: ['Greater of ±3℃ or ±3%'] },
      { label: 'SDK', values: ['Windows/Linux/ARM'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
      { label: 'Size (mm)', values: ['25.4×25.4×14.1 (Without Lens)'] },
      { label: 'Weight', values: ['11.5g (Without Lens)'] },
      { label: 'Protection Level', values: ['IP67 Rating (Front Lens)'] },
      { label: 'Optional Lens', values: ['Fixed Focus Athermal: 4.9mm/9.1mm/13mm/19mm/25mm/35mm/50mm/70mm'] },
    ],
  },
  {
    id: 'coin417g2',
    name: 'COIN417G2',
    subtitle: 'LH Series 384×288/17μm WLP Thermal Module Gen2',
    description:
      `LH417 uncooled infrared module is a new generation version of LH417 developed by ChengJing. It integrates 384x288/17μm wafer level package (WLP) infrared imaging detector, high performance signal processing circuit and image processing algorithm.

The LH417 infrared module features in sharp and crisp thermal image presentation, compact size and low cost. It also has an optional thermographic function with measurement range from -20℃~550 ℃ for industrial temperature measurement.

Until now, we have provided our customers with various mature and stable infrared thermal imaging solutions. It's easier for LH series thermal imaging common module to be integrated into more terminal products and greatly reduces the cost for customers.`,
    category: 'COIN Series',
    features: [
      { title: 'Outstanding Performance', description: 'Powerful image process algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'Temperature Measurement', description: 'With range of -20℃～150℃, 0~550℃ (support customization & expansion)' },
      { title: 'Fast Start-up', description: 'With start-up time at 3s and power consumption as low as 0.75W' },
      { title: 'Faster Integration', description: 'Support USB2.0/DVP/LVDS image output interfaces, RAW/YUV image data output, serial port control' },
    ],
    specifications: [
      { label: 'Model', values: ['LH417'] },
      { label: 'Sensitive Material', values: ['Vanadium Oxide'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8μm~14μm'] },
      { label: 'Typical NETD', values: ['≤40mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Start-up Time', values: ['3s'] },
      { label: 'Digital Video', values: ['RAW/YUV/BT656'] },
      { label: 'Digital Video Interface', values: ['USB2.0/DVP/LVDS'] },
      { label: 'Supply Voltage', values: ['4~5.5V'] },
      { label: 'Typical Power Consumption', values: ['0.75W'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 0℃~550℃'] },
      { label: 'Operating Temperature', values: ['-40°C~+70°C'] },
      { label: 'Storage Temperature', values: ['-45°C~+85°C'] },
    ],
  },
  {
    id: 'mini212',
    name: 'MINI212',
    subtitle: 'MN Series Miniature 256×192/12μm Thermal Module',
    description:
      `MN212 uncooled miniature thermal module is developed based on the TM256 thermal module by ChengJing. The product has small size, low power consumption, low cost, and optional multi-view configuration. Its temperature matrices and images allow integrators to integrate and develop their own products more efficiently and simply.

The MN212 is ideal for handheld thermal cameras, smart phones and accessories, wearable and AR glasses, and AI vision application devices.`,
    category: 'MINI Series',
    features: [
      { title: 'Meeting Low-Cost Requirements', description: 'Utilizing self-developed 256x192/12μm wafer-level-package infrared detector' },
      { title: 'Clear Imaging', description: 'Next-generation image algorithms for clearer imaging: NUC/3DNR/DNS/DRC/EE/SFFC etc' },
      { title: 'Temperature Measurement', description: 'Temperature measurement range: -20℃~150℃, 100℃~550℃' },
      { title: 'Ultra-compact Structure', description: 'Size 17mmx17mm (With PCBA) for more compact integration' },
      { title: 'Lightweight & IP67', description: 'Lightweight design with weight as low as 3.8g, achieving up to IP67 with the complete system' },
      { title: 'Rapid System Integration', description: 'Easy system integration for various applications' },
    ],
    specifications: [
      { label: 'Model', values: ['MN212'] },
      { label: 'Resolution', values: ['256×192'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤50mK'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE/SFFC'] },
      { label: 'Temperature Measurement Range', values: ['-20℃~150℃, 100℃~550℃'] },
      { label: 'Size (mm)', values: ['17×17 (With PCBA)'] },
      { label: 'Weight', values: ['3.8g'] },
      { label: 'Protection Level', values: ['Up to IP67 with complete system'] },
      { label: 'Operating Temperature', values: ['-20℃~+60℃'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
    ],
  },
  {
    id: 'min1212r',
    name: 'MIN1212R',
    subtitle: 'MIN Series Miniature 1280×1024/12μm Radiometric Thermal Module',
    description:
      `As a leading manufacturer of cooled and uncooled infrared detectors and thermal imaging modules, ChengJing is developing the miniature and lightweight MIN1212/R thermal imaging core.

Fully focused on SWaP-C (size-weight-cost-power), the MIN1212/R infrared camera core's size and weight already lead the industry. It is the best choice for customers with limited size and weight requirements when integrating their own drones.

The MIN1212/R thermal imaging module features a native 1280x1024/12 μm wafer-level infrared detector, an IP67 lens protection rating, an image and temperature measurement version, and various SDK solutions. It offers a more powerful and energy-efficient solution, overcoming integration challenges in consumer electronics and providing more solutions for compact and portable products.`,
    category: 'MINI Series',
    features: [
      { title: 'Compact Dimensions', description: 'Dimensions: 27.8 x 27.8 x 19.6 mm' },
      { title: 'Lightweight', description: 'Weight: 30 g' },
      { title: 'Advanced Algorithm', description: 'Completely new image processing algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'SDK Support', description: 'Windows/Linux/ARM SDK support' },
      { title: 'Temperature Measurement', description: 'Support for regional, spot, and isothermal temperature measurements' },
      { title: 'Easy Integration', description: 'Various interfaces for easy integration' },
    ],
    specifications: [
      { label: 'Model', values: ['MIN1212/R'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤35mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'SDK', values: ['Windows/Linux/ARM'] },
      { label: 'Size (mm)', values: ['27.8×27.8×19.6'] },
      { label: 'Weight', values: ['30g'] },
      { label: 'Operating Temperature', values: ['-40℃~+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃~+85℃'] },
    ],
  },
  {
    id: 'ilc212',
    name: 'ILC212',
    subtitle: 'MC Series Industrial 256×192/12μm WLP Thermal Module',
    description:
      `The MC212/612 infrared camera consists of a 256×192/640×512 resolution infrared detector, a 10mm optical lens, an image processing motherboard and structural components. It transmits analog video to the internal integration platform via a 6-pin connector, greatly reducing development time. It is specially designed for FPV drones.

Compared with similar low-resolution thermal imaging modules on the market, the MC series provides higher image quality through intelligent image processing algorithms such as non-uniformity correction (NUC), 3D noise reduction (3DNR), 2D noise reduction (DNS), dynamic range compression (DRC) and edge enhancement (EE).`,
    category: 'ILC Series',
    features: [
      { title: 'Compact Size', description: 'Compact size: only 21 x 22 mm (excluding lens)' },
      { title: 'Lightweight', description: 'Weight: only 15 g' },
      { title: 'Low Power', description: 'Power consumption: 350 mW' },
      { title: 'Simple Development', description: 'Support analog CVBS video output with PAL/NTSC formats' },
      { title: 'In-house Detector', description: 'In-house developed 256 x 192/12 μm infrared detector' },
      { title: 'Easy Maintenance', description: 'Easy to repair, no need for additional structural changes' },
    ],
    specifications: [
      { label: 'Model', values: ['MC212/612'] },
      { label: 'Resolution', values: ['256×192'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤50mK'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Video Output', values: ['CVBS (PAL/NTSC)'] },
      { label: 'Power Consumption', values: ['350mW'] },
      { label: 'Size (mm)', values: ['21×22 (excluding lens)'] },
      { label: 'Weight', values: ['15g'] },
      { label: 'Operating Temperature', values: ['-20℃~+60℃'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
    ],
  },
  {
    id: 'idas-384s',
    name: 'IDAS-384S',
    subtitle: 'Vehicle Series Vehicle-mounted 384×288/17μm Thermal Module',
    description:
      `Vehicle384 is one of the vehicle-mounted infrared modules developed by ChengJing. It integrates 384×288/17μm uncooled LWIR detector and can be used to enhance driver's visual capability in harsh environment such as total darkness, rain, snow, fog, dust etc.

With Vehicle384 automotive thermal camera, drivers can see clear image 300 meters away beyond the reach of vehicles' headlights and enhance their field of view so as to better avoid obstacles and identify targets. It provides intelligent alarm based on a lot of model trainings and a set of mature AI algorithms to identify pedestrians, cyclists, vehicles and give warning in advance.

This vehicle mounted thermal camera is also effective to eliminate the interference of high beams from oncoming vehicles, increasing drivers' perception towards the surrounding environment and seeing distance in darkness or bad weather so that the safety of drivers, passengers, pedestrians and vehicles can be guaranteed.`,
    category: 'IDAS Series',
    features: [
      { title: 'Night Vision Enhancement', description: 'See clear image 300 meters away beyond the reach of vehicles\' headlights' },
      { title: 'Enhanced Field of View', description: 'Enhance drivers\' field of view so as to better avoid obstacles and identify targets' },
      { title: 'AI Algorithms', description: 'Base on a lot of model trainings and own a set of mature AI algorithms' },
      { title: 'Object Recognition', description: 'Identify pedestrians, cyclists, vehicles and give warning in advance' },
      { title: 'Anti-glare', description: 'Anti-glare interference from oncoming vehicles in dark night' },
    ],
    specifications: [
      { label: 'Model', values: ['Vehicle384'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤50mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz'] },
      { label: 'Detection Range', values: ['300m+'] },
      { label: 'AI Features', values: ['Pedestrian/Cyclist/Vehicle detection'] },
      { label: 'Environmental Conditions', values: ['Darkness, rain, snow, fog, dust'] },
      { label: 'Operating Temperature', values: ['-40℃~+85℃'] },
      { label: 'Storage Temperature', values: ['-45℃~+105℃'] },
    ],
  },
  {
    id: 'iha417w',
    name: 'IHA417W',
    subtitle: 'MED Series Medical 384×288/17μm Thermal Module',
    description:
      `MED417W thermal module is specially developed for medical diagnosis. It is integrated with self-developed wafer level packaging 384×288/17μm infrared detector, 9.1mm lens, 30pin standard interface (Optional Type-C expansion board) and SDK for temperature measurement with accuracy up to ±0.5℃. The captured temperature data and heat distribution of target can be used to achieve radiation-free, non-invasive early disease diagnosis and long-distance, large-scale body temperature screening.

Without external black body, the MED417W thermal imaging module has a compact & light structure, which guarantees a lower integration cost. MED417W thermal camera module has an all-in-one standard Type-C interface with power supply, data transmission and control, customers can quickly develop and integrate various temperature measuring systems like medical diagnosis and epidemic prevention.

The MED417W thermal camera module can be quickly integrated into various medical thermal imaging devices, and it is expected to be widely used in the fields of Disease Screening, Traditional Chinese Medicine Physiotherapy, Health Check-up, Rehabilitation etc. at present and in the future.`,
    category: 'IHA Series',
    features: [
      { title: 'Compact Design', description: '≤25.4×25.4×30.3 (With 9.1mm Lens)' },
      { title: 'High Sensitivity', description: 'Typical NETD<40mk' },
      { title: 'Flexible Detection', description: 'Detect Distance: 0.5m/5m' },
      { title: 'Lightweight', description: 'Light Weight: 32.2±3g (With 9.1mm Lens)' },
      { title: 'High Accuracy', description: 'Superior Temperature Measurement Accuracy: ≤±0.5℃' },
    ],
    specifications: [
      { label: 'Model', values: ['MED417W'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['<40mK'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Lens', values: ['9.1mm'] },
      { label: 'Interface', values: ['30pin standard (Optional Type-C)'] },
      { label: 'Detection Distance', values: ['0.5m / 5m'] },
      { label: 'Temperature Accuracy', values: ['±0.5℃'] },
      { label: 'Size (mm)', values: ['≤25.4×25.4×30.3 (With Lens)'] },
      { label: 'Weight', values: ['32.2±3g (With Lens)'] },
      { label: 'Operating Temperature', values: ['-10℃~+50℃'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
    ],
  },
  {
    id: 'iha417',
    name: 'IHA417',
    subtitle: 'MED Series Fever Sensing 384×288/17μm Thermal Module',
    description:
      `MED417 uncooled infrared thermal camera is specially developed for infrared (IR) fever sensing system in order to measure human body temperature anytime and anywhere. It consists of 384×288/17μm infrared detector, 7mm infrared optical lens and a specialized SDK for human body temperature measurement.

Data captured by MED417 can be transferred to the back-end integration platform via 50-pin or USB3.0 interface to achieve the display of full-screen temperature data and infrared thermal image and many other functions. With such infrared thermal imaging module, customers could develop and integrate their own IR fever sensing system quickly and efficiently.

The MED417 thermal camera is specially developed for elevated skin temperature screening. It is easy to be integrated into infrared thermographic system which has been used for fighting against COVID-19 and fast to detect elevated body temperature in places that have large volume of people, such as airports, subways, train stations, schools, shopping centers etc.`,
    category: 'IHA Series',
    features: [
      { title: 'High Precision', description: '±0.5℃ high precision temperature measurement without external black body' },
      { title: 'Flexible Detection', description: 'Detect distance: 0.5m (for medical diagnosis); 5m (for epidemic prevention and animal thermography)' },
      { title: 'Type-C Interface', description: 'An all-in-one standard Type-C interface with power supply, data transmission and control' },
      { title: 'SDK Support', description: 'Support Windows/Android/Linux SDK; Achieve video stream analysis and conversion from gray to temperature' },
    ],
    specifications: [
      { label: 'Model', values: ['MED417'] },
      { label: 'Resolution', values: ['384×288'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤50mK'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Lens', values: ['7mm'] },
      { label: 'Interface', values: ['Type-C (Power/Data/Control)'] },
      { label: 'Detection Distance', values: ['0.5m (Medical) / 5m (Epidemic Prevention)'] },
      { label: 'Temperature Accuracy', values: ['±0.5℃ (without black body)'] },
      { label: 'SDK', values: ['Windows/Android/Linux'] },
      { label: 'Operating Temperature', values: ['-10℃~+50℃'] },
      { label: 'Storage Temperature', values: ['-40℃~+85℃'] },
    ],
  },
  {
    id: 'itl612r-pro',
    name: 'ITL612R-PRO',
    subtitle: 'MIN Series Professional 640×512/12μm Radiometric Thermal Module',
    description:
      `As a leading manufacturer of cooled uncooled infrared detectors & thermal modules, ChengJing Technology developes a tiny size and lightweight infrared thermal imaging core MIN612R Pro, which is the compact version of infrared camera core MIN612R.

Fully oriented for SWaP-C (size-weight-and-power-cost), the size and weight of MIN612R Pro infrared camera core has already been at the forefront in the industry, it is the best choice for customers who have restrict requirements on size and weight when integrating their own drones.

Providing 640×512/12μm self-developed wafer-level infrared detector, lens protection grade IP67, imaging and temperature measurement version, and various SDK solutions, the MIN612R Pro thermal module responds to space constraints with smaller size and lighter weight, achieves longer battery life with lower power consumption, overcomes integration problems in the consumer electronics field, and provides more solutions for compact and portable products.

It is specially developed for the field of Predictive Maintenance, Photovoltaic Inspection, Environmental Protection, Scientific Research, Aerial Photography, Police Investigation, Disaster Relief & Rescue, Forest Fire Prevention, Urban Safety etc.`,
    category: 'ITL Series',
    features: [
      { title: 'Ultra Compact', description: 'Size: 17mm×17mm×22mm (with 9.1mm lens)' },
      { title: 'Ultra Lightweight', description: 'Weight: 13g (with 9.1mm lens)' },
      { title: 'Low Power', description: 'Power consumption as low as 0.7W' },
      { title: 'Clear Image & Accurate Radiometry', description: 'Brand new image process algorithm: NUC/3DNR/DNS/DRC/EE' },
      { title: 'SDK Support', description: 'Support Windows/Linux/ARM SDK' },
      { title: 'Regional Temperature Measurement', description: 'Support regional, point & isotherm temperature measurement' },
    ],
    specifications: [
      { label: 'Model', values: ['MIN612R Pro'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['8~14μm'] },
      { label: 'Typical NETD', values: ['≤30mK'] },
      { label: 'Frame Rate', values: ['25Hz/30Hz/50Hz'] },
      { label: 'Digital Video', values: ['RAW/YUV'] },
      { label: 'Image Algorithm', values: ['NUC/3DNR/DNS/DRC/EE'] },
      { label: 'SDK', values: ['Windows/Linux/ARM'] },
      { label: 'Size (mm)', values: ['17×17×22 (with 9.1mm lens)'] },
      { label: 'Weight', values: ['13g (with 9.1mm lens)'] },
      { label: 'Power Consumption', values: ['0.7W'] },
      { label: 'Operating Temperature', values: ['-40℃~+70℃'] },
      { label: 'Storage Temperature', values: ['-45℃~+85℃'] },
    ],
  },
  // ==================== XH Series (Cooled IR Modules) ====================
  {
    id: 'xh1207mb',
    name: 'XH1207MB',
    subtitle: 'Cooled MWIR 1280×1024/7μm Infrared Module',
    description:
      `The XH1207MB is a standard cooled infrared module developed by ChengJing. It is available in various resolution formats, wavelength ranges, and continuous optical lens options. The XH1207MB houses a 1280×1024/7um MWIR detector.

The XH1207MB's electronics are already equipped with various image processing algorithms to produce clear infrared images in complete darkness or poor visibility conditions. It features excellent image quality and can be widely used in security surveillance, border defense, and scientific research.`,
    category: 'XH Series',
    features: [
      { title: 'Long-range Detection', description: 'Meets long-range detection requirements' },
      { title: 'High Sensitivity', description: 'High sensitivity cooled detector' },
      { title: 'Wide Field of View', description: 'Resolution up to 1280×1024' },
      { title: 'Easy Integration', description: 'Easy system integration' },
      { title: 'Multiple Interfaces', description: 'DVP/Cameralink interface, RAW/YUV image output' },
    ],
    specifications: [
      { label: 'Model', values: ['XH1207MB'] },
      { label: 'Detector Type', values: ['Cooled MWIR'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['7μm'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
      { label: 'Interface', values: ['DVP/Cameralink'] },
      { label: 'Video Output', values: ['RAW/YUV'] },
    ],
  },
  {
    id: 'xh1210hmf',
    name: 'XH1210HMF',
    subtitle: 'HOT Cooled MWIR 1280×1024/10μm Infrared Module',
    description:
      `The XH1210HMF module uses a high-temperature, cooled 1280×1024/10μm mid-wavelength infrared detector combined with a next-generation image processing algorithm to output fine, high-definition 1280×1024 infrared images.

The image size is reduced to 10μm, achieving higher spatial resolution, and shorter focal length optical lenses can achieve the same detection distance. HOT technology has significantly optimized the module's size, weight, and power consumption.`,
    category: 'XH Series',
    features: [
      { title: 'Large-area Array', description: '1280×1024 large-area array, wide field of view' },
      { title: 'High Spatial Resolution', description: '10μm pixel size, high spatial resolution, long-range detection' },
      { title: 'Compact Size', description: 'Size reduced to 101×101×54mm³, weight reduced to 570g' },
      { title: 'Quick Start-up', description: 'Cooling time reduced to 6min, quick start-up' },
      { title: 'Multiple Interfaces', description: 'Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber optic' },
    ],
    specifications: [
      { label: 'Model', values: ['XH1210HMF'] },
      { label: 'Detector Type', values: ['HOT Cooled MWIR'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['10μm'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
      { label: 'Size (mm)', values: ['101×101×54'] },
      { label: 'Weight', values: ['570g'] },
      { label: 'Cooling Time', values: ['6min'] },
      { label: 'Interface', values: ['Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber'] },
    ],
  },
  {
    id: 'xh1210lc',
    name: 'XH1210LC',
    subtitle: 'Cooled LWIR 1280×1024/10μm Infrared Module',
    description:
      `The XH1210LC long-wavelength cooled infrared module, based on a 1280×1024/10μm long-wavelength cooled infrared detector, is integrated with various image processing algorithms.

It is particularly suitable for detecting dust or reflective interference in challenging environments. The high frame rate allows for the acquisition of fast-moving targets. The mechanism is compatible with multiple interfaces for easy integration.`,
    category: 'XH Series',
    features: [
      { title: 'Dust Penetration', description: 'High ability to penetrate sand and dust, adapt to complex working environments' },
      { title: 'Low-temperature Detection', description: 'Capable of detecting low-temperature objects' },
      { title: 'Anti-reflection', description: 'Undisturbed by the reflection of the sun and sea' },
      { title: 'Multiple Interfaces', description: 'Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber optic' },
    ],
    specifications: [
      { label: 'Model', values: ['XH1210LC'] },
      { label: 'Detector Type', values: ['Cooled LWIR'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['10μm'] },
      { label: 'Spectral Range', values: ['8~12μm (LWIR)'] },
      { label: 'Interface', values: ['Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber'] },
    ],
  },
  {
    id: 'xh1212ma',
    name: 'XH1212MA',
    subtitle: 'Cooled MWIR 1280×1024/12μm Infrared Module',
    description:
      `The XH1212MA is a standard cooled infrared module developed by ChengJing. It is available in various resolution formats, wavelength ranges, and continuous optical lens options. The XH1212MA features a 1280×1024/12um MWIR detector.

The XH1212MA's electronics are pre-integrated with various image processing algorithms to produce clear infrared images in complete darkness or poor visibility conditions.`,
    category: 'XH Series',
    features: [
      { title: 'Long-range Detection', description: 'Meets long-range detection requirements' },
      { title: 'High Sensitivity', description: 'High sensitivity cooled detector' },
      { title: 'Wide Field of View', description: 'Resolution up to 1280×1024' },
      { title: 'Easy Integration', description: 'Easy system integration' },
      { title: 'Multiple Interfaces', description: 'DVP/Cameralink interface, RAW/YUV image output' },
    ],
    specifications: [
      { label: 'Model', values: ['XH1212MA'] },
      { label: 'Detector Type', values: ['Cooled MWIR'] },
      { label: 'Resolution', values: ['1280×1024'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
      { label: 'Interface', values: ['DVP/Cameralink'] },
      { label: 'Video Output', values: ['RAW/YUV'] },
    ],
  },
  {
    id: 'xh330',
    name: 'XH330',
    subtitle: 'HgCdTe Mid-wave Cooled Infrared Detector Module',
    description:
      `The XH330 is developed on the basis of HgCdTe mid-wave cooled infrared detector. By using thermal imaging technology, it provides excellent detection capabilities in various environments.

This module is designed for high-performance applications requiring superior sensitivity and image quality.`,
    category: 'XH Series',
    features: [
      { title: 'HgCdTe Detector', description: 'Based on HgCdTe mid-wave cooled infrared detector' },
      { title: 'High Performance', description: 'Excellent detection capabilities' },
      { title: 'Thermal Imaging', description: 'Advanced thermal imaging technology' },
    ],
    specifications: [
      { label: 'Model', values: ['XH330'] },
      { label: 'Detector Type', values: ['HgCdTe Cooled MWIR'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
    ],
  },
  {
    id: 'xh615hmg',
    name: 'XH615HMG',
    subtitle: 'HOT Cooled MWIR 640×512/15μm Infrared Module',
    description:
      `The XH615HMG module utilizes a 640×512/15μm high-temperature, cooled mid-wave infrared detector combined with a next-generation image processing algorithm to produce fine, high-definition 640×512 infrared images.

The image size is reduced to 15μm, providing higher spatial resolution, and shorter focal length optical lenses can achieve the same detection distance. HOT technology significantly optimizes the module's performance.`,
    category: 'XH Series',
    features: [
      { title: 'Large-area Array', description: '640×512 large-area array, wide field of view' },
      { title: 'High Spatial Resolution', description: '15μm pixel size, high spatial resolution, long-range detection' },
      { title: 'Multiple Interfaces', description: 'Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber optic' },
    ],
    specifications: [
      { label: 'Model', values: ['XH615HMG'] },
      { label: 'Detector Type', values: ['HOT Cooled MWIR'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['15μm'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
      { label: 'Interface', values: ['Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber'] },
    ],
  },
  {
    id: 'xh615la',
    name: 'XH615LA',
    subtitle: 'Cooled LWIR 640×512/15μm Infrared Module',
    description:
      `The XH615LA long-wavelength cooled infrared module, based on a 640×512/15µm long-wavelength cooled infrared detector, is integrated with various image processing algorithms.

It is particularly suitable for detecting dust or reflective interference in challenging environments. A frame rate of up to 100Hz enables the acquisition of fast-moving targets.`,
    category: 'XH Series',
    features: [
      { title: 'Dust Penetration', description: 'High ability to penetrate sand and dust, adapt to complex working environments' },
      { title: 'Low-temperature Detection', description: 'Capable of detecting low-temperature objects' },
      { title: 'Anti-reflection', description: 'Undisturbed by the reflection of the sun and sea' },
      { title: 'High Frame Rate', description: 'Output frame rate of 50Hz/100Hz' },
      { title: 'Multiple Interfaces', description: 'Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber optic' },
    ],
    specifications: [
      { label: 'Model', values: ['XH615LA'] },
      { label: 'Detector Type', values: ['Cooled LWIR'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['15μm'] },
      { label: 'Spectral Range', values: ['8~12μm (LWIR)'] },
      { label: 'Frame Rate', values: ['50Hz/100Hz'] },
      { label: 'Interface', values: ['Cameralink/USB3.0/GiGE/HDMI/SDI/MIPI/Fiber'] },
    ],
  },
  {
    id: 'xh615ma',
    name: 'XH615MA',
    subtitle: 'Cooled MWIR 640×512/15μm Infrared Module',
    description:
      `The XH615MA is a standard cooled infrared module developed by ChengJing. It is available in various resolution formats, wavelength ranges, and continuous optical lens options. The XH615MA features a 640×512/15µm MWIR module with a CL058 cryocooler built in.

The XH615MA's electronics are pre-integrated with various image processing algorithms to produce clear infrared images in complete darkness or poor visibility conditions.`,
    category: 'XH Series',
    features: [
      { title: 'Long-range Detection', description: 'Meets long-range detection requirements' },
      { title: 'High Sensitivity', description: 'High sensitivity cooled detector' },
      { title: 'Easy Integration', description: 'Easy system integration' },
      { title: 'Multiple Interfaces', description: 'DVP/Cameralink interface, RAW/YUV image output' },
    ],
    specifications: [
      { label: 'Model', values: ['XH615MA'] },
      { label: 'Detector Type', values: ['Cooled MWIR'] },
      { label: 'Resolution', values: ['640×512'] },
      { label: 'Pixel Size', values: ['15μm'] },
      { label: 'Spectral Range', values: ['3~5μm (MWIR)'] },
      { label: 'Cryocooler', values: ['CL058'] },
      { label: 'Interface', values: ['DVP/Cameralink'] },
      { label: 'Video Output', values: ['RAW/YUV'] },
    ],
  },
  // ==================== YXW Series (Portable Thermal Cameras) ====================
  {
    id: 'yxw256',
    name: 'YXW256',
    subtitle: 'Portable Thermal Camera 256×192 VOx with Mobile App',
    description:
      `The YXW256 is a portable thermal camera featuring 256×192 resolution VOx uncooled microbolometer with ≤40mK thermal sensitivity. With 12μm pixel size and 50°×37.2° field of view, it delivers professional-grade thermal imaging in a compact handheld design.

Advanced features include 3 points/3 lines/3 areas temperature analysis, isotherm lines, high/low temperature tracking with on-screen marker and audio alarm, and multiple image modes (Infrared, Visible Light, Fusion, PIP). Supports both Android 7.0+ and iOS 12.0+ mobile systems.

The portable design measures 136.6×41×21.55mm and weighs 205g with 1100mAh Li-polymer battery providing ≥2.5 hours operation. Supports 10 languages and Type-C interface. Certified with CE, FCC, and ROHS standards.`,
    category: 'YXW Series',
    features: [
      { title: 'High Resolution', description: '256×192 VOx, 12μm Pixel Size' },
      { title: 'Temperature Range', description: '-20°C~+550°C Industrial Measurement' },
      { title: 'Multi-mode Display', description: 'Infrared, Visible Light, Fusion, PIP' },
      { title: 'Temperature Analysis', description: '3 Points, 3 Lines, 3 Areas' },
      { title: 'Dual Platform', description: 'Android 7.0+ and iOS 12.0+ Support' },
      { title: 'Audio Alarm', description: 'On-screen Marker and Audio Alerts' },
      { title: 'Portable Design', description: '136.6×41×21.55mm, 205g' },
      { title: 'Multi-language', description: '10 Languages Support' },
      { title: 'Long Battery Life', description: '1100mAh, ≥2.5h Operation' },
    ],
    specifications: [
      { label: 'Model', values: ['YXW256'] },
      { label: 'Temperature Range', values: ['-20°C~+550°C'] },
      { label: 'Infrared Resolution', values: ['256×192'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Detector Type', values: ['VOx Uncooled Microbolometer'] },
      { label: 'Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Temperature Measurement Sensitivity', values: ['0.1°C'] },
      { label: 'Emissivity', values: ['0.01~1.00'] },
      { label: 'Infrared Wavelength Range', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spatial Resolution', values: ['3.43mrad'] },
      { label: 'Focal Length', values: ['3.5mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity', values: ['≤40mK(@25°C,F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['50°×37.2°'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Point temperature, line/surface average, max/min temperature'] },
      { label: 'Temperature Analysis', values: ['3 points, 3 lines, 3 areas (regions)'] },
      { label: 'Isotherm Lines', values: ['√'] },
      { label: 'Center Point Temperature Measurement', values: ['√'] },
      { label: 'High/Low Temperature Tracking', values: ['√'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen marker alarm / Audio alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Red Heat, Fusion'] },
      { label: 'Image Modes', values: ['Infrared Mode, Visible Light Mode, Fusion Mode, Picture-in-Picture Mode'] },
      { label: 'Photo/Video Recording', values: ['√'] },
      { label: 'Image/Video Format', values: ['Image: JPEG / Video: MP4'] },
      { label: 'Data Interface', values: ['Type-C'] },
      { label: 'Supported Languages', values: ['Simplified Chinese, Traditional Chinese, English, Russian, Japanese, German, French, Italian, Korean, Polish'] },
      { label: 'Mobile App Support', values: ['Android 7.0 / iOS 12.0 and above'] },
      { label: 'Battery', values: ['1100mAh Li-polymer battery (non-removable)'] },
      { label: 'Charging Time', values: ['≤2h'] },
      { label: 'Operating Time', values: ['≥2.5h'] },
      { label: 'Operating Temperature', values: ['-10°C~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20°C~60°C'] },
      { label: 'Power Consumption', values: ['≤1.4W'] },
      { label: 'Certifications', values: ['CE, FCC, ROHS'] },
      { label: 'Product Dimensions', values: ['136.6mm×41mm×21.55mm'] },
      { label: 'Product Weight', values: ['205g'] },
      { label: 'Standard Accessories', values: ['Color box, user manual, Type-C data cable (1m)'] },
    ],
  },
  // ==================== YXP Series (Compact Thermal Modules) ====================
  {
    id: 'yxp160',
    name: 'YXP160',
    subtitle: 'Compact Thermal Module 160×120 VOx with Autofocus',
    description:
      `The YXP160 is an ultra-compact thermal imaging module featuring 160×120 resolution VOx microbolometer with ≤40mK thermal sensitivity. With autofocus capability and 0.3m-3m adjustable measurement distance, it delivers versatile thermal imaging in an incredibly small form factor.

Advanced features include point/line/area temperature modes, 15 color palettes, high/low tracking with on-screen and voice alerts, and thermal/blended image modes. Supports Android mobile systems via Type-C USB interface.

The ultra-compact design measures only 35.3×26×19.8mm and weighs just 17g with power consumption ≤0.41W. Perfect for smartphone integration and portable thermal imaging applications. Certified with FCC, RoHS, and CE standards.`,
    category: 'YXP Series',
    features: [
      { title: 'Ultra Compact', description: '35.3×26×19.8mm, Only 17g' },
      { title: 'Autofocus', description: '0.3m-3m Adjustable Distance' },
      { title: 'VOx Detector', description: '160×120 Resolution, ≤40mK Sensitivity' },
      { title: '15 Color Palettes', description: 'Thermal, Iron, Rainbow, Grayscale, etc.' },
      { title: 'Voice Alerts', description: 'On-screen and Voice High-Temp Alerts' },
      { title: 'Mobile Integration', description: 'Android Support via Type-C USB' },
      { title: 'Low Power', description: '≤0.41W Power Consumption' },
      { title: 'Multi-language', description: 'Simplified/Traditional Chinese, English' },
      { title: 'Photo & Video', description: 'JPEG Image and MP4 Video Recording' },
    ],
    specifications: [
      { label: 'Model', values: ['YXP160'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['160×120'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading'] },
      { label: 'Measurement Distance', values: ['0.3m-3m adjustable'] },
      { label: 'Detector Type', values: ['VOx microbolometer'] },
      { label: 'Temperature Modes', values: ['Point, line, area'] },
      { label: 'Emissivity', values: ['0.01-1.00 (Default: 0.95)'] },
      { label: 'Infrared Wavelength', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spatial Resolution', values: ['5.31mrad'] },
      { label: 'Focal Length', values: ['3.2mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity', values: ['≤40mK'] },
      { label: 'Focus Type', values: ['Autofocus'] },
      { label: 'Field of View', values: ['50.0°(H)×37.2°(V), 63.6°(D)'] },
      { label: 'Temperature Units', values: ['°C/°F'] },
      { label: 'Temperature Display', values: ['Center, high, low (custom 3 pts, 3 lines, 3 areas)'] },
      { label: 'Isotherms', values: ['Manual'] },
      { label: 'High/Low Tracking', values: ['√'] },
      { label: 'High-Temp Alerts', values: ['On-screen and voice alerts'] },
      { label: 'Color Palettes', values: ['15 (thermal, iron, rainbow, grayscale, etc.)'] },
      { label: 'Image Modes', values: ['Thermal, blended'] },
      { label: 'Photo/Video Recording', values: ['√'] },
      { label: 'Image/Video Format', values: ['JPEG / MP4'] },
      { label: 'Interface', values: ['Type-C USB'] },
      { label: 'Supported Languages', values: ['Simplified/Traditional Chinese, English'] },
      { label: 'Mobile Systems', values: ['Android'] },
      { label: 'Operating Temperature', values: ['-10°C~50°C'] },
      { label: 'Humidity', values: ['10%-90% RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20°C~60°C'] },
      { label: 'Power Consumption', values: ['≤0.41W'] },
      { label: 'Certifications', values: ['FCC, RoHS, CE'] },
      { label: 'Product Dimensions', values: ['35.3×26×19.8mm'] },
      { label: 'Net Weight', values: ['17g'] },
      { label: 'Standard Accessories', values: ['Color box, storage bag, lens cleaning cloth, manual'] },
    ],
  },
  {
    id: 'yxp256',
    name: 'YXP256',
    subtitle: 'Compact Thermal Module 256×192 VOx with Autofocus',
    description:
      `The YXP256 is an ultra-compact high-resolution thermal imaging module featuring 256×192 VOx microbolometer with ≤40mK thermal sensitivity. With 12μm pixel size, autofocus capability and 0.3m-3m adjustable measurement distance, it delivers superior thermal imaging detail in an incredibly small form factor.

Advanced features include point/line/area temperature modes, 15 color palettes, high/low tracking with on-screen and voice alerts, and thermal/blended image modes. Supports Android mobile systems via Type-C USB interface.

The ultra-compact design measures only 35.3×26×19.2mm and weighs just 15.6g with power consumption ≤0.38W. Perfect for smartphone integration and portable thermal imaging applications. Certified with FCC, RoHS, and CE standards.`,
    category: 'YXP Series',
    features: [
      { title: 'Ultra Compact', description: '35.3×26×19.2mm, Only 15.6g' },
      { title: 'High Resolution', description: '256×192, 12μm Pixel Size' },
      { title: 'Autofocus', description: '0.3m-3m Adjustable Distance' },
      { title: '15 Color Palettes', description: 'Thermal, Iron, Rainbow, Grayscale, etc.' },
      { title: 'Voice Alerts', description: 'On-screen and Voice High-Temp Alerts' },
      { title: 'Mobile Integration', description: 'Android Support via Type-C USB' },
      { title: 'Ultra Low Power', description: '≤0.38W Power Consumption' },
      { title: 'Multi-language', description: 'Simplified/Traditional Chinese, English' },
      { title: 'Photo & Video', description: 'JPEG Image and MP4 Video Recording' },
    ],
    specifications: [
      { label: 'Model', values: ['YXP256'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['256×192'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading'] },
      { label: 'Measurement Distance', values: ['0.3m-3m adjustable'] },
      { label: 'Detector Type', values: ['VOx microbolometer'] },
      { label: 'Temperature Modes', values: ['Point, line, area'] },
      { label: 'Emissivity', values: ['0.01-1.00 (Default: 0.95)'] },
      { label: 'Infrared Wavelength', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spatial Resolution', values: ['3.43mrad'] },
      { label: 'Focal Length', values: ['3.5mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity', values: ['≤40mK'] },
      { label: 'Focus Type', values: ['Autofocus'] },
      { label: 'Field of View', values: ['50.0°(H)×37.2°(V), 63.6°(D)'] },
      { label: 'Temperature Units', values: ['°C/°F'] },
      { label: 'Temperature Display', values: ['Center, high, low (custom 3 pts, 3 lines, 3 areas)'] },
      { label: 'Isotherms', values: ['Manual'] },
      { label: 'High/Low Tracking', values: ['√'] },
      { label: 'High-Temp Alerts', values: ['On-screen and voice alerts'] },
      { label: 'Color Palettes', values: ['15 (thermal, iron, rainbow, grayscale, etc.)'] },
      { label: 'Image Modes', values: ['Thermal, blended'] },
      { label: 'Photo/Video Recording', values: ['√'] },
      { label: 'Image/Video Format', values: ['JPEG / MP4'] },
      { label: 'Interface', values: ['Type-C USB'] },
      { label: 'Supported Languages', values: ['Simplified/Traditional Chinese, English'] },
      { label: 'Mobile Systems', values: ['Android'] },
      { label: 'Operating Temperature', values: ['-10°C~50°C'] },
      { label: 'Humidity', values: ['10%-90% RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20°C~60°C'] },
      { label: 'Power Consumption', values: ['≤0.38W'] },
      { label: 'Certifications', values: ['FCC, RoHS, CE'] },
      { label: 'Product Dimensions', values: ['35.3×26×19.2mm'] },
      { label: 'Net Weight', values: ['15.6g'] },
      { label: 'Standard Accessories', values: ['Color box, storage bag, lens cleaning cloth, manual'] },
    ],
  },
  // ==================== YXI Series (Handheld Thermal Imagers) ====================
  {
    id: 'yxi160',
    name: 'YXI160',
    subtitle: 'Professional Handheld Thermal Imager 160×120 VOx',
    description:
      `The YXI160 is a professional handheld thermal imager featuring 160×120 resolution VOx detector with ≤40mK thermal sensitivity. With 17μm pixel size and 50.0°×37.2° field of view, it delivers excellent thermal imaging across -20°C to 550°C temperature range.

Advanced features include 3 points/3 lines/3 rectangles temperature analysis, manual isothermal line, high/low temperature tracking, and multiple image modes (Infrared, Visible Light, Fusion, PIP). Supports mobile app connection for Android 6.0/iOS 12.0 and above.

The professional design measures 231×79.2×84.9mm, weighs 392g, with 18650 3200mAh battery providing ≥6 hours operation. Features 16G storage, 10 languages support, and Type-C USB interface. Certified with CE, FCC, and RoHS standards.`,
    category: 'YXI Series',
    features: [
      { title: 'Temperature Range', description: '-20~550°C Wide Range' },
      { title: 'Resolution', description: '160×120 VOx Detector' },
      { title: 'Visible Light', description: 'More Accurately Identify Targets' },
      { title: 'Temperature Analysis', description: '3 Points, 3 Lines, 3 Rectangles' },
      { title: 'Multiple Palettes', description: 'Choose and Switch Different Palettes as Needed' },
      { title: 'Mobile App', description: 'Android 6.0 / iOS 12.0 and Above' },
      { title: 'SD Card Data Storage', description: '16G Built-in Storage' },
      { title: 'Multiple Languages', description: '10 Languages Support' },
      { title: 'Rechargeable Battery', description: '18650 3200mAh for ≥6h Operation' },
    ],
    specifications: [
      { label: 'Model', values: ['YXI160'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['160×120'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Detector Type', values: ['Vanadium Oxide Microbolometer (VOx)'] },
      { label: 'TEMP Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Emissivity', values: ['0.01~1.00 (0.95 default)'] },
      { label: 'Infrared Response Band', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['17μm'] },
      { label: 'Spatial Resolution', values: ['5.31mrad'] },
      { label: 'Focal Length', values: ['3.2mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity (NETD)', values: ['≤40mK (@25°C, F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['50.0°×37.2°'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Point temperature, line/area average, highest/lowest temperature'] },
      { label: 'Temperature Analysis', values: ['3 points, 3 lines, 3 rectangles'] },
      { label: 'Isothermal Line', values: ['Manual'] },
      { label: 'Center Point Measurement', values: ['√'] },
      { label: 'High/Low Temperature Tracking', values: ['√'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen icon alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Red Hot, Fusion'] },
      { label: 'Image Modes', values: ['Infrared, Visible Light, Fusion, Picture-in-Picture'] },
      { label: 'Photo/Video Recording', values: ['√'] },
      { label: 'Image/Video Format', values: ['Image: JPEG / Video: MP4'] },
      { label: 'Data Interface', values: ['Type-C USB'] },
      { label: 'Supported Languages', values: ['Simplified Chinese, Traditional Chinese, English, Russian, Japanese, German, French, Italian, Korean, Polish'] },
      { label: 'Mobile App', values: ['Android 6.0 / iOS12.0 and above'] },
      { label: 'Storage', values: ['16G'] },
      { label: 'Battery', values: ['18650 Battery 3200mAh (Non-removable)'] },
      { label: 'Charging Time', values: ['≤4h'] },
      { label: 'Working Time', values: ['≥6h'] },
      { label: 'Operating Temperature', values: ['-10°C~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (Non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20°C~60°C'] },
      { label: 'Power Consumption', values: ['< 1.6W'] },
      { label: 'Certifications', values: ['CE, FCC, RoHS'] },
      { label: 'Product Size', values: ['231×79.2×84.9mm'] },
      { label: 'Net Weight', values: ['392g'] },
      { label: 'Standard Accessories', values: ['Color box, Type-C data cable (1m), User manual'] },
      { label: 'Optional Accessories', values: ['Macro Lens (Model: YRI256-WJ)'] },
    ],
  },
  {
    id: 'yxi256',
    name: 'YXI256',
    subtitle: 'Advanced Handheld Thermal Imager 256×192 VOx',
    description:
      `The YXI256 is an advanced handheld thermal imager featuring high-resolution 256×192 VOx detector with ≤40mK thermal sensitivity. With 12μm pixel size and 50.0°×37.2° field of view, it delivers superior thermal imaging detail across -20°C to 550°C temperature range.

Advanced features include 3 points/3 lines/3 rectangles temperature analysis, manual isothermal line, high/low temperature tracking, and multiple image modes (Infrared, Visible Light, Fusion, PIP). Supports mobile app connection for Android 6.0/iOS 12.0 and above.

The professional design measures 231×79.2×84.9mm, weighs 392g, with 18650 3200mAh battery providing ≥6 hours operation. Features 16G storage, 10 languages support, and Type-C USB interface. Certified with CE, FCC, and RoHS standards.`,
    category: 'YXI Series',
    features: [
      { title: 'Temperature Range', description: '-20~550°C Wide Range' },
      { title: 'Resolution', description: '256×192 High Resolution VOx Detector' },
      { title: 'Visible Light', description: 'More Accurately Identify Targets' },
      { title: 'Temperature Analysis', description: '3 Points, 3 Lines, 3 Rectangles' },
      { title: 'Multiple Palettes', description: 'Choose and Switch Different Palettes as Needed' },
      { title: 'Mobile App', description: 'Android 6.0 / iOS 12.0 and Above' },
      { title: 'SD Card Data Storage', description: '16G Built-in Storage' },
      { title: 'Multiple Languages', description: '10 Languages Support' },
      { title: 'Rechargeable Battery', description: '18650 3200mAh for ≥6h Operation' },
    ],
    specifications: [
      { label: 'Model', values: ['YXI256'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['256×192'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Detector Type', values: ['Vanadium Oxide Microbolometer (VOx)'] },
      { label: 'TEMP Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Emissivity', values: ['0.01~1.00 (0.95 default)'] },
      { label: 'Infrared Response Band', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spatial Resolution', values: ['3.43mrad'] },
      { label: 'Focal Length', values: ['3.5mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity (NETD)', values: ['≤40mK (@25°C, F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['50.0°×37.2°'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Point temperature, line/area average, highest/lowest temperature'] },
      { label: 'Temperature Analysis', values: ['3 points, 3 lines, 3 rectangles'] },
      { label: 'Isothermal Line', values: ['Manual'] },
      { label: 'Center Point Measurement', values: ['√'] },
      { label: 'High/Low Temperature Tracking', values: ['√'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen icon alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Red Hot, Fusion'] },
      { label: 'Image Modes', values: ['Infrared, Visible Light, Fusion, Picture-in-Picture'] },
      { label: 'Photo/Video Recording', values: ['√'] },
      { label: 'Image/Video Format', values: ['Image: JPEG / Video: MP4'] },
      { label: 'Data Interface', values: ['Type-C USB'] },
      { label: 'Supported Languages', values: ['Simplified Chinese, Traditional Chinese, English, Russian, Japanese, German, French, Italian, Korean, Polish'] },
      { label: 'Mobile App', values: ['Android 6.0 / iOS12.0 and above'] },
      { label: 'Storage', values: ['16G'] },
      { label: 'Battery', values: ['18650 Battery 3200mAh (Non-removable)'] },
      { label: 'Charging Time', values: ['≤4h'] },
      { label: 'Working Time', values: ['≥6h'] },
      { label: 'Operating Temperature', values: ['-10°C~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (Non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20°C~60°C'] },
      { label: 'Power Consumption', values: ['< 1.6W'] },
      { label: 'Certifications', values: ['CE, FCC, RoHS'] },
      { label: 'Product Size', values: ['231×79.2×84.9mm'] },
      { label: 'Net Weight', values: ['392g'] },
      { label: 'Standard Accessories', values: ['Color box, Type-C data cable (1m), User manual'] },
      { label: 'Optional Accessories', values: ['Macro Lens (Model: YRI256-WJ)'] },
    ],
  },
  {
    id: 'yxi80',
    name: 'YXI80',
    subtitle: 'Entry-level Handheld Thermal Imager 80×62 CMOS',
    description:
      `The YXI80 is an entry-level handheld thermal imager featuring 80×62 resolution CMOS detector with a wide temperature measurement range of -20°C to 550°C. With 150mK thermal sensitivity and 45°(H)×36°(V) field of view, it delivers reliable thermal imaging for various applications.

Key features include multiple image modes (IR, Visible, Fusion, PIP), TISR mode for enhanced image clarity, multiple color palettes, and built-in flashlight function. The 30W visible light camera helps accurately identify targets in the field.

The compact 225mm×70mm×86.5mm design weighs only 303g with a 2000mAh rechargeable battery providing ≥7 hours of continuous operation. Supports expandable SD card storage, multiple languages, and includes PC Analysis Tool. Certified with CE, FCC, and ROHS standards.`,
    category: 'YXI Series',
    features: [
      { title: 'Temperature Range', description: '-20~550°C Wide Range' },
      { title: 'Resolution', description: '80×62/96×96 Options Available' },
      { title: 'Visible Light', description: 'More Accurately Identify Targets' },
      { title: 'TISR Mode', description: 'Enhance Image Clarity and Integrity' },
      { title: 'Multiple Palettes', description: 'Choose and Switch Different Palettes as Needed' },
      { title: 'Flashlight Function', description: 'Fearless in Dark Environments' },
      { title: 'SD Card Data Storage', description: 'External SD Card, Expandable' },
      { title: 'Multiple Languages', description: 'Meets the Needs of Users from Different Countries and Regions' },
      { title: 'Rechargeable Battery', description: 'Meets Users\' Needs for Long-Term Measurement' },
    ],
    specifications: [
      { label: 'Model', values: ['YXI80'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['80×62'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Measurement Sensitivity', values: ['0.1°C'] },
      { label: 'Detector Type', values: ['CMOS'] },
      { label: 'Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Emissivity', values: ['0.01~1.00'] },
      { label: 'Infrared Wavelength Range', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['35μm'] },
      { label: 'Spatial Resolution', values: ['11.67mrad'] },
      { label: 'Focal Length', values: ['3.0mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity (NETD)', values: ['150mK(@25°C,F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['45°(H)×36°(V)/55°(D)'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Center Point, Max Temp, Min Temp'] },
      { label: 'Temperature Analysis', values: ['PC Analysis Tool'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen marker alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Black Red, etc.'] },
      { label: 'Visible Light Camera', values: ['30W'] },
      { label: 'Image Modes', values: ['IR, Visible, Fusion, PIP'] },
      { label: 'Image/Video Capture', values: ['Image'] },
      { label: 'Image Format', values: ['JPEG'] },
      { label: 'Flashlight', values: ['√'] },
      { label: 'Data Interface', values: ['Type-C'] },
      { label: 'Languages', values: ['Simplified Chinese, English'] },
      { label: 'Storage', values: ['4G SD Card (Expandable)'] },
      { label: 'Battery', values: ['Non-removable 2000mAh'] },
      { label: 'Charging Time', values: ['≤3h'] },
      { label: 'Operating Time', values: ['≥7h'] },
      { label: 'Operating Temperature', values: ['-10~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20~60°C'] },
      { label: 'Power Consumption', values: ['≤1W'] },
      { label: 'Certifications', values: ['CE, FCC, ROHS'] },
      { label: 'Display', values: ['2.4-inch'] },
      { label: 'Product Dimensions', values: ['225mm×70mm×86.5mm'] },
      { label: 'Product Weight', values: ['303g'] },
      { label: 'Standard Accessories', values: ['Color box, user manual, Type-C data cable (1m)'] },
    ],
  },
  {
    id: 'yxi96',
    name: 'YXI96',
    subtitle: 'Professional Handheld Thermal Imager 96×96 VOx',
    description:
      `The YXI96 is a professional handheld thermal imager featuring 96×96 resolution VOx detector with superior thermal sensitivity of ≤60mK(@25°C,F#1.0). With 12μm pixel size and 50°×50° field of view, it delivers exceptional thermal imaging performance across -20°C to 550°C temperature range.

Advanced features include TISR technology (240×240 super resolution), isotherm lines visualization, center point temperature measurement, and high/low temperature tracking with on-screen marker alarm. Supports image and video capture in JPEG and MP4 formats.

The professional-grade design measures 231mm×79.2mm×84.9mm, weighs 303g, and features a 3200mAh battery for ≥7 hours operation. Supports 10 languages, expandable 4G SD card storage, and includes PC Analysis Tool. Certified with CE, FCC, and ROHS standards.`,
    category: 'YXI Series',
    features: [
      { title: 'Temperature Range', description: '-20~550°C Wide Range' },
      { title: 'Resolution', description: '80×62/96×96 Options Available' },
      { title: 'Visible Light', description: 'More Accurately Identify Targets' },
      { title: 'TISR Mode', description: 'Enhance Image Clarity and Integrity' },
      { title: 'Multiple Palettes', description: 'Choose and Switch Different Palettes as Needed' },
      { title: 'Flashlight Function', description: 'Fearless in Dark Environments' },
      { title: 'SD Card Data Storage', description: 'External SD Card, Expandable' },
      { title: 'Multiple Languages', description: 'Meets the Needs of Users from Different Countries and Regions' },
      { title: 'Rechargeable Battery', description: 'Meets Users\' Needs for Long-Term Measurement' },
    ],
    specifications: [
      { label: 'Model', values: ['YXI96'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['96×96'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Measurement Sensitivity', values: ['0.1°C'] },
      { label: 'Detector Type', values: ['VOx'] },
      { label: 'Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Emissivity', values: ['0.01~1.00'] },
      { label: 'Infrared Wavelength Range', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spatial Resolution', values: ['8.89mrad'] },
      { label: 'Focal Length', values: ['1.35mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity (NETD)', values: ['≤60mK(@25°C,F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['50°×50°'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Center Point, Max Temp, Min Temp'] },
      { label: 'Temperature Analysis', values: ['PC Analysis Tool'] },
      { label: 'TISR', values: ['√ (Resolution: 240×240)'] },
      { label: 'Isotherm Lines', values: ['√'] },
      { label: 'Center Point Temperature Measurement', values: ['√'] },
      { label: 'High/Low Temperature Tracking', values: ['√'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen marker alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Fusion'] },
      { label: 'Image Modes', values: ['IR'] },
      { label: 'Image/Video Capture', values: ['√'] },
      { label: 'Image Format', values: ['Image: JPEG / Video: MP4'] },
      { label: 'Data Interface', values: ['Type-C'] },
      { label: 'Languages', values: ['Supports 10 Languages'] },
      { label: 'Storage', values: ['4G SD Card (Expandable)'] },
      { label: 'Battery', values: ['Non-removable 3200mAh'] },
      { label: 'Charging Time', values: ['≤4h'] },
      { label: 'Operating Time', values: ['≥7h'] },
      { label: 'Operating Temperature', values: ['-10~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20~60°C'] },
      { label: 'Power Consumption', values: ['≤1.4W'] },
      { label: 'Certifications', values: ['CE, FCC, ROHS'] },
      { label: 'Display', values: ['2.4-inch'] },
      { label: 'Product Dimensions', values: ['231mm×79.2mm×84.9mm'] },
      { label: 'Product Weight', values: ['303g'] },
      { label: 'Standard Accessories', values: ['Color box, user manual, Type-C data cable (1m)'] },
    ],
  },
  {
    id: 'yxi96-pro',
    name: 'YXI96 PRO',
    subtitle: 'Advanced Professional Handheld Thermal Imager with WiFi',
    description:
      `The YXI96 PRO is the flagship model featuring 96×96 resolution VOx detector with ≤60mK thermal sensitivity and comprehensive connectivity options including built-in WiFi. With 12μm pixel size and 50°×50° field of view, it delivers professional-grade thermal imaging across -20°C to 550°C.

Enhanced features include 200W visible light camera, full image modes (IR, Visible, Fusion, PIP), TISR technology (240×240 super resolution), isotherm lines, center point measurement, and high/low temperature tracking. Captures JPEG images and MP4 videos with expandable 8G SD storage.

The professional design measures 231mm×79.2mm×84.9mm, weighs 303g, with 3200mAh battery providing ≥7 hours operation. Supports 10 languages, WiFi data transfer, and includes PC Analysis Tool. Certified with CE, FCC, and ROHS standards.`,
    category: 'YXI Series',
    features: [
      { title: 'Temperature Range', description: '-20~550°C Wide Range' },
      { title: 'Resolution', description: '80×62/96×96 Options Available' },
      { title: 'Visible Light', description: 'More Accurately Identify Targets' },
      { title: 'TISR Mode', description: 'Enhance Image Clarity and Integrity' },
      { title: 'Multiple Palettes', description: 'Choose and Switch Different Palettes as Needed' },
      { title: 'Flashlight Function', description: 'Fearless in Dark Environments' },
      { title: 'SD Card Data Storage', description: 'External SD Card, Expandable' },
      { title: 'Multiple Languages', description: 'Meets the Needs of Users from Different Countries and Regions' },
      { title: 'Rechargeable Battery', description: 'Meets Users\' Needs for Long-Term Measurement' },
    ],
    specifications: [
      { label: 'Model', values: ['YXI96 PRO'] },
      { label: 'Temperature Range', values: ['-20°C~550°C'] },
      { label: 'Infrared Resolution', values: ['96×96'] },
      { label: 'Measurement Accuracy', values: ['±2°C or ±2% of reading (whichever is greater)'] },
      { label: 'Measurement Sensitivity', values: ['0.1°C'] },
      { label: 'Detector Type', values: ['VOx'] },
      { label: 'Measurement Mode', values: ['Industrial Temperature Measurement'] },
      { label: 'Emissivity', values: ['0.01~1.00'] },
      { label: 'Infrared Wavelength Range', values: ['8~14μm'] },
      { label: 'Pixel Size', values: ['12μm'] },
      { label: 'Spatial Resolution', values: ['8.89mrad'] },
      { label: 'Focal Length', values: ['1.35mm'] },
      { label: 'Frame Rate', values: ['25Hz'] },
      { label: 'Thermal Sensitivity (NETD)', values: ['≤60mK(@25°C,F#1.0)'] },
      { label: 'Focusing Method', values: ['Fixed Focus'] },
      { label: 'Field of View (FOV)', values: ['50°×50°'] },
      { label: 'Temperature Units', values: ['°C/°F/K'] },
      { label: 'Temperature Display', values: ['Center Point, Max Temp, Min Temp'] },
      { label: 'Temperature Analysis', values: ['PC Analysis Tool'] },
      { label: 'TISR', values: ['√ (Resolution: 240×240)'] },
      { label: 'Isotherm Lines', values: ['√'] },
      { label: 'Center Point Temperature Measurement', values: ['√'] },
      { label: 'High/Low Temperature Tracking', values: ['√'] },
      { label: 'High/Low Temperature Alarm', values: ['On-screen marker alarm'] },
      { label: 'Color Palettes', values: ['White Hot, Black Hot, Rainbow, Iron Red, Fusion'] },
      { label: 'Visible Light Camera', values: ['200W'] },
      { label: 'Image Modes', values: ['IR, Visible, Fusion, PIP'] },
      { label: 'Image/Video Capture', values: ['√'] },
      { label: 'Image Format', values: ['Image: JPEG / Video: MP4'] },
      { label: 'Data Interface', values: ['Type-C'] },
      { label: 'Languages', values: ['Supports 10 Languages'] },
      { label: 'WiFi', values: ['√'] },
      { label: 'Storage', values: ['8G SD Card (Expandable)'] },
      { label: 'Battery', values: ['Non-removable 3200mAh'] },
      { label: 'Charging Time', values: ['≤4h'] },
      { label: 'Operating Time', values: ['≥7h'] },
      { label: 'Operating Temperature', values: ['-10~50°C'] },
      { label: 'Operating Humidity', values: ['10%~90%RH (non-condensing)'] },
      { label: 'Storage Temperature', values: ['-20~60°C'] },
      { label: 'Power Consumption', values: ['≤1.4W'] },
      { label: 'Certifications', values: ['CE, FCC, ROHS'] },
      { label: 'Display', values: ['2.4-inch'] },
      { label: 'Product Dimensions', values: ['231mm×79.2mm×84.9mm'] },
      { label: 'Product Weight', values: ['303g'] },
      { label: 'Standard Accessories', values: ['Color box, user manual, Type-C data cable (1m)'] },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id)
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const currentProduct = getProduct(productId)
  if (!currentProduct) return []

  // Get products from the same category (excluding current product)
  const sameCategoryProducts = products.filter(
    (p) => p.category === currentProduct.category && p.id !== productId
  )

  // If we have enough products from the same category, return them
  if (sameCategoryProducts.length >= limit) {
    return sameCategoryProducts.slice(0, limit)
  }

  // If not enough, add random products from other categories
  const otherCategoryProducts = products.filter(
    (p) => p.category !== currentProduct.category && p.id !== productId
  )

  // Shuffle and pick remaining needed
  const shuffled = otherCategoryProducts.sort(() => Math.random() - 0.5)
  const remaining = limit - sameCategoryProducts.length
  
  return [...sameCategoryProducts, ...shuffled.slice(0, remaining)]
}
