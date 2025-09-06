

const HomeView = () => {
    return (
    <div>
        <header className="section py-24">
            <div className="flex flex-col items-center ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 m-3 ">Hold styr på ditt dyrs helse</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-amber-600 m-3">For din del og dyrets del</h1>
            </div>
        </header>
        <section className="px-6 py-12 max-w-2xl mx-auto text-center text-lg text-gray-800">
            <p className="mb-4">
                Noen gang opplevd at du får spørsmålet fra dyrlegen: <em>"Når startet det?"</em>
            </p>
            <p className="mb-4">
                Eller at du lurer litt på hvor lenge kjæledyret ditt egentlig har vært litt dårlig?
            </p>
            <p className="mb-4">
                Nå slipper du å ha haugevis med gamle notater du må lete frem på telefonen.
            </p>
            <p>
                Registrer dyrets helsetilstand direkte her i <strong>kjæledyrdagboken</strong>!
            </p>
        </section>
    </div>
    )
}

export default HomeView