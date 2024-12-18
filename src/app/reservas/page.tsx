
import ReservationForm from "@/components/reservas/ReservationForm";

export default function Reservas(){

    return (
        <div className="w-[100%] h-[700px] flex align-middle justify-center">
            <div className="w-[90%] flex">
                <ReservationForm/>
                <div className="w-[65%] mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
                    <div 
                        id="schedule"
                        className="w-[80$] h-[100%] flex justify-center"
                    >
                        <Schedule/>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Schedule() {
    const days = ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const timeSlots = [
        '10:00 - 15:00',
        '17:00 - 23:00',
    ];

    return (
        <div className="w-full h-full">
            <h2 className="text-3xl font-bold text-center mb-6">HORARIOS</h2>
            <table className="table-auto w-full border-collapse border border-gray-200 bg-white rounded-md">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border border-gray-300">Día</th>
                        <th className="px-4 py-2 border border-gray-300">Horario</th>
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2 border border-gray-300">{day}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                {timeSlots.map((slot, slotIndex) => (
                                    <div key={slotIndex}>{slot}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
