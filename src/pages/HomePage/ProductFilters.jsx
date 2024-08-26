const ProductFilters = () => {
    return <section className="flex justify-center items-center py-8">
        <input id="filter-0" type="radio" name="filter-selection" className="hidden" />
        <label htmlFor="filter-0" className="rounded-l-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer">Todos</label>
        <input id="filter-1" type="radio" name="filter-selection" className="hidden" />
        <label htmlFor="filter-1" className="bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer">Masculino</label>
        <input id="filter-2" type="radio" name="filter-selection" className="hidden" />
        <label htmlFor="filter-2" className="rounded-e-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer">Feminino</label>
    </section>
}

export default ProductFilters;