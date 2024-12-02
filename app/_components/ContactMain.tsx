
export default function ContactMain() {
    return (
        <>
            <div className="d-flex justify-content-center  min-vh-100">
                <div className="mainContainer3 text-center">
                    <section id="contact" className="contact">
                        <h2>Contact Us</h2>
                        <form action="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Enter your name" />
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter your email" />
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" >Add your message here</textarea>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}
