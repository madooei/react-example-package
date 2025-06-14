import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Card } from "@/index";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-600"); // primary variant
    expect(button).toHaveClass("px-4", "py-2"); // medium size
  });

  it("renders different variants correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-600");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gray-600");

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });

  it("renders different sizes correctly", () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "px-2.5",
      "py-1.5",
      "text-xs",
    );

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-4", "py-2", "text-sm");

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-6", "py-3", "text-base");
  });

  it("handles disabled state correctly", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe("Card", () => {
  it("renders with children", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );

    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders with title", () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>,
    );

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Card className="custom-class">
        <p>Content</p>
      </Card>,
    );

    const card = screen.getByText("Content").parentElement;
    expect(card).toHaveClass("custom-class");
  });

  it("applies base styles", () => {
    render(
      <Card>
        <p>Content</p>
      </Card>,
    );

    const card = screen.getByText("Content").parentElement;
    expect(card).toHaveClass(
      "bg-white",
      "shadow-md",
      "rounded-lg",
      "p-6",
      "border",
      "border-gray-200",
    );
  });
});
