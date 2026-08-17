export default function Section({title, children}) {
    return(
        <section>
            {title && <h1></h1>}
            {children}
        </section>
    );
}