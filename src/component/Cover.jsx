import profile from "../assets/images/cover-copy-3.jpg";

export function Cover() {
    return (
        <>
            <section class="banner align-items-center p-5">
                <div class="container">
                    <div class="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="text-white">
                                <h1 className="my-2"> <strong>Hello</strong></h1>
                                <h1 className="my-2"> <strong>I am Chaitanya Landge...</strong></h1>
                                <button class="btn btn-primary px-5 py-2 mt-3 w-35">Download CV</button>
                            </div>
                        </div>

                        <div className="col-lg-6 p-5">
                            <img src={profile} class="rounded-circle img-fluid border" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}