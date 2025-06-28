import PreviewModal from "@components/Dashboard/PreviewModal"

export default function Page() {
    return (
        <div>
            <PreviewModal isOpen={false} onClose={function (): void {
                throw new Error("Function not implemented.")
            } } itemName={""} category={""} location={""} description={""} priceDay={""} priceWeek={""} priceMonth={""} images={[]} condition={{
                new: false,
                used: false
            }} availability={{
                start: null,
                end: null
            }} securityDeposit={false} depositAmount={""} />
        </div>
    )
}
