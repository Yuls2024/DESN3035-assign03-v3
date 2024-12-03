
export default function ContactMain() {
    return (
        <>
            <div className="d-flex justify-content-center ">
                <div className="mainContainer3 text-center">
                    <section id="contact" className="contact">
                        <h4 className="pt-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '20px' }}>
                        Contact Us
                        </h4>
                        <form action="name">
                            <label htmlFor="name" className="text-start">Name</label>
                            <input type="text" name="name" placeholder="Enter your name" />
                            <label htmlFor="email" className="text-start">Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter your email" />
                            <label htmlFor="message" className="text-start">Message</label>
                            <textarea name="message" id="message" placeholder="Add your message here" ></textarea>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}
