import PreviewModal from "@components/Dashboard/PreviewModal"

export default function Page() {
    return (
        <div>
            <PreviewModal isOpen={false} onClose={function (): void {
                throw new Error("Function not implemented.")
            } } />
        </div>
    )
}
