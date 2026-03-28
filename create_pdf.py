from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch

pdf_path = "public/Prakashresume.pdf"
c = canvas.Canvas(pdf_path, pagesize=letter)
width, height = letter

def add_text(y_pos, text, size=10, bold=False):
    if bold:
        c.setFont("Helvetica-Bold", size)
    else:
        c.setFont("Helvetica", size)
    c.drawString(0.5*inch, y_pos, text)
    return y_pos - 0.15*inch

y = height - 0.5*inch

# Header
y = add_text(y, "PRAKASH SHARMA", 16, True)
y = add_text(y, "Email: prakash019sharma@gmail.com | Phone: +977 9761665753", 9)
y = add_text(y, "GitHub: github.com/prakashorigin", 9)
y -= 0.05*inch

# Profile Summary
y = add_text(y, "PROFILE SUMMARY", 11, True)
y = add_text(y, "Motivated MERN Stack Developer with strong knowledge of modern web", 9)
y = add_text(y, "technologies. Skilled in React.js, Node.js, Express.js, MongoDB.", 9)
y -= 0.05*inch

# Education
y = add_text(y, "EDUCATION", 11, True)
y = add_text(y, "Patan Multiple Campus (TU) - BSc in CSIT (Running 7th Semester)", 9)
y = add_text(y, "Galaxy Secondary School - Plus Two Science (2022)", 9)
y -= 0.05*inch

# Technical Skills
y = add_text(y, "TECHNICAL SKILLS", 11, True)
y = add_text(y, "Frontend: React.js, TypeScript, Tailwind CSS, Next.js", 9)
y = add_text(y, "Backend: Node.js, Express.js, MongoDB, PostgreSQL, JWT", 9)
y = add_text(y, "Tools: Git, Docker, Vercel, Postman", 9)
y -= 0.05*inch

# Projects
y = add_text(y, "PROJECTS", 11, True)
y = add_text(y, "1. CrazySnake-Game - Interactive game with 4 levels, leaderboards", 9)
y = add_text(y, "2. Video-Intelligence-System - AI video analysis with FastAPI", 9)
y = add_text(y, "3. Car-Racing-Game - Browser game with 25 levels", 9)
y = add_text(y, "4. To-Do App - MERN stack with authentication", 9)
y -= 0.05*inch

# Experience
y = add_text(y, "EXPERIENCE", 11, True)
y = add_text(y, "Mansovison Technology (2024-2025) - Freelancer, Data Entry", 9)
y = add_text(y, "Khalti Events (2023-Present) - Volunteer, Event Support", 9)
y -= 0.05*inch

# Other Skills
y = add_text(y, "OTHER SKILLS", 11, True)
y = add_text(y, "Communication, time management, team collaboration, adaptability", 9)

c.save()
print("Resume PDF created successfully at public/Prakashresume.pdf!")
