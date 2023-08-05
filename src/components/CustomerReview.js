import React from "react";
import { Card } from "react-bootstrap";

export default function Reviews() {
  const randomImageUrl = `https://picsum.photos/seed/${Math.random()}/100`;
  return (
    <section id="pricing" className="mt-5 py-5">
      <div className="container-lg">
        <div className="text-center text-white">
          <h2 className="text-2xl fw-bold">What Our Customer Said</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, fugiat!
          </p>
        </div>

        <div className="row my-5 g-0 align-items-center justify-content-center">
          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0 bg-gray-900">
              <Card.Body className="text-center">
                <Card.Img
                  src={randomImageUrl}
                  className="w-25 h-25 object-cover rounded-full mx-auto mb-4"
                />
                <Card.Title as="h6" className="text-white fw-semibold">KAGEYAMA</Card.Title>
                <Card.Subtitle className="lead text-yellow-500 fw-bold">4/5</Card.Subtitle>
                <Card.Text className="mx-4 text-muted my-3 text-slate-200">
                  <p>Great product, would definitely recommend!</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-9 col-lg-4">
            <Card className="border-yellow-600 border-2 py-3 bg-gray-900">
              <Card.Body className="text-center ">
                <Card.Img
                  src={randomImageUrl}
                  className="w-25 h-25 object-cover rounded-full mx-auto mb-4"
                />
                <Card.Title as="h6" className="text-white fw-semibold">SHOYO HINATA</Card.Title>
                <Card.Subtitle className="lead text-yellow-500 fw-bold">4/5</Card.Subtitle>
                <Card.Text className="mx-4 text-muted my-3">
                  <p>Good quality and fast delivery.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-8 col-lg-4 col-xl-3">
            <Card className="border-0 bg-gray-900">
              <Card.Body className="text-center">
                <Card.Img
                  src={randomImageUrl}
                  className="w-25 h-25 object-cover rounded-full mx-auto mb-4"
                />
                <Card.Title as="h6" className="text-white fw-semibold">KAGEYAMA</Card.Title>
                <Card.Subtitle className="lead text-yellow-500 fw-bold">5/5</Card.Subtitle>
                <Card.Text className="mx-4 text-muted my-3">
                  <p>Not what I expected, but customer service was excellent</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
