// components/HospitalSelector.js
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const HospitalSelector = ({ doctor, bookinginfo }) => {
  // Get the first doctor and their facilities as the default
  console.log(doctor)
  const [selectedFacility, setSelectedFacility] = useState(doctor.facilities[0]);
  const [activeTime, setActiveTime] = useState('')
  const [showBookingInfo, setShowBookingInfo] = useState(false)

  const handleBookNow = () => {
    bookinginfo(selectedFacility.name + activeTime)
  }
  const handleSelect = (value) => {
    const facility = doctor.facilities.find((f) => f.name === value);
    setSelectedFacility(facility);
    setShowBookingInfo(true)
  };
  const setTime = (time, day) => {
    setActiveTime(`${day}, ${time}`)
    setShowBookingInfo(true)
    const data = `${selectedFacility.name} ${activeTime}`
    bookinginfo(`${selectedFacility.name}, ${day}, ${time}`);
  }

  return (
    <div className="space-y-6">
      {/* Dropdown to Select Facility */}
      <Select onValueChange={handleSelect} defaultValue={doctor.facilities[0].name}>
        <SelectTrigger className="w-full border border-gray-300 p-2 rounded-md">
          {selectedFacility.name}
        </SelectTrigger>
        <SelectContent>
          {doctor.facilities.map((facility, index) => (
            <SelectItem key={index} value={facility.name}>
              {facility.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Timings for Selected Facility */}
      <div>
      <h2 className="text-xl font-bold mb-2">{selectedFacility.name} - Time Slots</h2>
      
        
<Tabs defaultValue="account" className="w-[400px]">
          {selectedFacility.slots.map((slot, index) => (
              <>
              <TabsList key={index}>
                <TabsTrigger value={index}><span className="font-semibold">{slot.day}:</span></TabsTrigger>
              </TabsList>
              <TabsContent value={index}>
              <div className="flex gap-2 flex-wrap mt-1">
                {slot.times.length > 0 ? (
                  slot.times.map((time, tIdx) => (
                     <Button key={tIdx} type="button" variant="outline" className={`${activeTime === time && 'activeBtn'} p-2 h-auto bg-transparent border text-black`} onClick={() => setTime(time,slot.day)}>{time}</Button>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">No slots available</span>
                )}
                
              </div>
            </TabsContent>
            </>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default HospitalSelector;