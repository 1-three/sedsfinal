import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { Navigation } from "@/components/navigation"
import { StatsSection } from "@/components/stats-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { TeamMemberCard } from "@/components/team-member-card"
import { Button } from "@/components/ui/button"
import { Rocket, Target, Heart, Crown, Users, ExternalLink } from "lucide-react"

export default function Home() {
  const teamMembers = [
    {
      name: "Avichal Verma",
      graduation: "2027",
      role: "Chairperson",
      image: "images/avichal.jpg",
      quote: "If you can dream it, you can do it",
      linkedin: "https://in.linkedin.com/in/nupur-sharma-a24b66274"
    },
    {
      name: "Vaibhavi Yadav",
      graduation: "2027",
      role: "Vice-Chair",
      image: "images/vaibhavi.jpg",
      quote: "The people who are crazy enough to think that they can change the world are the ones who do",
      linkedin: "https://www.linkedin.com/in/vaibhavi-yadav-13169a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Aatreyee",
      graduation: "2027",
      role: "Secretary",
      image: "images/aatreyee1.jpg",
      quote: "Rage, rage against the dying of the light",
      linkedin: "https://www.linkedin.com/in/aatreyee/"
    },
    {
      name: "Srinjay Sarkar",
      graduation: "2027",
      role: "Corporate Affairs and Funding Director",
      image: "images/srinjay.jpg",
      quote: "You only live once, but if you do it right, once is enough",
      linkedin: "https://www.linkedin.com/in/krishna-narwade-439ba0258"
    },
    {
      name: "Aryaman Agrawal",
      graduation: "2027",
      role: "Treasurer",
      image: "images/arohi.jpg",
      quote: "It's okay to lose your way....just don't lose sight of what you have decided",
      linkedin: "https://www.linkedin.com/in/aryaman2005"
    },
    {
      name: "Teerath",
      graduation: "2027",
      role: "Executive Director",
      image: "images/aisha.jpg",
      quote: "Win small, Win early, Win often",
      linkedin: "https://www.linkedin.com/in/aishajennath"
    }
    // ,
    // {
    //   name: "Vasundhra Sharma",
    //   graduation: "2027",
    //   role: "Creative and Design Lead",
    //   image: "images/vas.jpg",
    //   quote: "There is no greater agony than bearing an untold story inside you.",
    //   linkedin: "https://www.linkedin.com/in/vasundhra-s-80b081301?trk=contact-info"
    // },
    // {
    //   name: "Sukruta Nadkarni",
    //   graduation: "2027",
    //   role: "Chapter Affairs and Expansion Manager",
    //   image: "images/sukruta.jpg",
    //   quote: "Reach for the stars",
    //   linkedin: "https://www.linkedin.com/in/sukruta-nadkarni"
    // },
    // {
    //   name: "Aatreyee",
    //   graduation: "2027",
    //   role: "Webmaster",
    //   image: "images/aatreyee.jpg",
    //   quote: "Rage, rage against the dying of the light",
    //   linkedin: "https://www.linkedin.com/in/aatreyee/"
    // },
    // {
    //   name: "Nikhil K",
    //   graduation: "2027",
    //   role: "OneSpace Manager",
    //   image: "images/nikhil.jpeg",
    //   quote: "Slow and steady wins the race.",
    //   linkedin: "https://www.linkedin.com/in/nikhil-k-6b40352b2/"
    // },
    // {
    //   name: "Vaibhavi",
    //   graduation: "2027",
    //   role: "Social Media Manager",
    //   image: "images/vaibhavi.jpg",
    //   quote: "The people who are crazy enough to think that they can change the world are the ones who do",
    //   linkedin: "https://www.linkedin.com/in/vaibhavi-yadav-13169a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    // },
    // {
    //   name: "Ronak Madkaikar",
    //   graduation: "2026",
    //   role: "Projects Manager",
    //   image: "images/ronak.jpg",
    //   quote: "Where curiosity meets innovation, the impossible becomes inevitable.",
    //   linkedin: "https://www.linkedin.com/in/ronak-madkaikar-732419285/"
    // },
    // {
    //   name: "Shrinidhi G",
    //   graduation: "2027",
    //   role: "Design and Creatives",
    //   image: "images/shrinidhi.jpg",
    //   quote: "Dream beyond the cosmos",
    //   linkedin: "https://www.linkedin.com/in/shrinidhi-g-64b0532b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    // }
  ]

//   SEDS VIT
// VIT Vellore
// 120 Members
// 8 Active Projects
// SEDS CUSAT
// SEDS CUSAT
// CUSAT
// 95 Members
// 6 Active Projects
// SEDS Celestia
// SEDS Celestia
// BITS Goa
// 85 Members
// 5 Active Projects
// SEDS Antariksh
// SEDS Antariksh
// VIT Chennai
// 85 Members
// 5 Active Projects
// SEDS Celestia Explora
// SEDS Celestia Explora
// Shiv Nadar University
// 85 Members
// 5 Active Projects
// SEDS REC
// SEDS REC
// REC
// 85 Members
// 5 Active Projects
// SEDS Nebula
// SEDS Nebula
// VIT Bhopal
// 85 Members
// 5 Active Projects
// SEDS AGI
// SEDS AGI
// AGI
// 85 Members
// 5 Active Projects
// SEDS Aurora
// SEDS Aurora
// VIT AP
// 85 Members
// 5 Active Projects
// SEDS BPHC
// SEDS BPHC
// BITS Hyderabad
// 85 Members
// 5 Active Projects
// SEDS KCT
// SEDS KCT
// KCT
// 85 Members
// 5 Active Projects

  const chapters = [
    { name: "SEDS VIT", university: "VIT Vellore", members: 120, projects: 8 },
    { name: "SEDS Antariksh", university: "VIT Chennai", members: 85, projects: 5 },
    { name: "SEDS CUSAT", university: "CUSAT", members: 95, projects: 3 },
    { name: "SEDS Celestia", university: "BITS Goa", members: 75, projects: 5 },
    { name: "SEDS Celestia Explora", university: "Shiv Nadar University", members: 85, projects: 5 },
    { name: "SEDS REC", university: "REC", members: 67, projects: 3 },
    { name: "SEDS Nebula", university: "VIT Bhopal", members: 85, projects: 1 },
    { name: "SEDS AGI", university: "AGI", members: 79, projects: 2 },
    { name: "SEDS Aurora", university: "VIT AP", members: 91, projects: 4 },
    { name: "SEDS BPHC", university: "BITS Hyderabad", members: 72, projects: 5 },
    { name: "SEDS KCT", university: "KCT", members: 85, projects: 2 },  
  ]

  const projects = [
    {
      title: "University Rover Challenge (URC)",
      team: "Team Vyadh, SEDS-VIT",
      description: "Qualified for the final round of URC 2020 as one of the top 36 teams in the world.",
      period: "2019 - 2022",
      category: "URC",
    },
    {
      title: "Student Unmanned Aerial Systems (SUAS)",
      team: "SEDS-VIT",
      description:
        "Aerial system capable of fully autonomous flight, navigation, payload dropping, and obstacle avoidance.",
      period: "2019 - 2022",
      category: "CubeSat",
    },
    {
      title: "Extremity Rover",
      team: "SEDS-REC",
      description: "Rocker bogie chassis rover controlled via Bluetooth, capable of treading through rough terrains.",
      period: "2018 - 2019",
      category: "Rocketry",
    },
    {
      title: "Star Tracker",
      team: "SEDS Celestia",
      description: "Telescope mount that tracks and displays objects on Stellarium in real time.",
      period: "2019",
      category: "Space Robotics",
    },
  ]

  const blogPosts = [
    {
      title: "Science and Religion",
      author: "Zainab Shakruwala",
      date: "February 02, 2021",
      excerpt: "What is the difference between the Cosmos and the Universe?",
      tags: ["Space", "Religion"],
    },
    {
      title: "Reminiscence: An open eyed dream",
      author: "Sarika",
      date: "December 07, 2020",
      excerpt: "With the night sky as my blanket, I snuggle in, dreaming to a far distance.",
      tags: ["Memories", "Space"],
    },
    {
      title: "Billionaire Space Race",
      author: "Jayakrishna Melagiri",
      date: "November 19, 2020",
      excerpt: "Exploring the commercial space race and its implications.",
      tags: ["Space", "Commercialisation"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      {/* Home Section */}
      <section id="home">
        <AutoSliderBanner />
        <StatsSection />
        <WhatWeDoSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">About SEDS</h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300 mb-8">
              Students for the Exploration and Development of Space (SEDS) is a 501(c)(3) non-profit organization that
              empowers young people to participate and make an impact in space exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <Target className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower young people to contribute to the exploration and development of space through educational
                initiatives, hands-on projects, and networking opportunities.
              </p>
            </div>
            <div className="text-center">
              <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                A world where students play a leading role in advancing humanity's presence in space, fostering
                innovation and collaboration across borders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Rocket, title: "Innovation", desc: "Pushing boundaries and exploring new frontiers" },
              { icon: Heart, title: "Passion", desc: "Driven by our love for space exploration" },
              { icon: Target, title: "Excellence", desc: "Striving for the highest standards" },
              { icon: Crown, title: "Leadership", desc: "Developing tomorrow's space leaders" },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our History</h3>
            <div className="space-y-8">
              {[
                {
                  year: "1980",
                  title: "Foundation",
                  desc: "SEDS was founded at MIT and Princeton by Peter Diamandis, Todd Hawley, and Bob Richards.",
                },
                {
                  year: "1990s & 2000s",
                  title: "Global Expansion",
                  desc: "SEDS expanded internationally, SEDS' India Chapter was established in 2004.",
                },
                {
                  year: "Today",
                  title: "Leading Space Education",
                  desc: "SEDS continues to be at the forefront of student space exploration and development.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white text-dark-900 px-3 py-1 rounded-full text-sm font-bold min-w-fit">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section id="outreach" className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Outreach Programs</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Inspiring the next generation of space explorers through educational programs, events, and community
            engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "10K+", label: "Students Reached" },
              { value: "475+", label: "School Visits" },
              { value: "125+", label: "Workshops Conducted" },
              { value: "50+", label: "Partner Organizations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-800 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">For Schools</h3>
              <p className="text-gray-300 mb-6">
                Bring space education to your school through our interactive programs and workshops.
              </p>
              <Button variant="outline">Request a Visit</Button>
            </div>
            <div className="bg-dark-800 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">For Volunteers</h3>
              <p className="text-gray-300 mb-6">
                Join our outreach team and help inspire the next generation of space explorers.
              </p>
              <Button variant="outline">Volunteer With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Our Projects</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Exploring the frontiers of space through innovative student-led projects and research initiatives.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-dark-900 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-sm">{project.period}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{project.team}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-8">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Rocketry", desc: "Design and launch of experimental rockets" },
              { title: "CubeSats", desc: "Small satellite development and deployment" },
              { title: "Communications", desc: "Space communication systems" },
              { title: "Research", desc: "Space science and technology research" },
            ].map((category, index) => (
              <div key={index} className="bg-dark-900 p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-3">{category.title}</h4>
                <p className="text-gray-400">{category.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Own Project</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have an innovative space project idea? We provide resources, mentorship, and funding opportunities to help
              bring your vision to life.
            </p>
            <Button variant="outline">Submit Project Proposal</Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Team 2025</h2>
          <p className="text-lg text-gray-300 text-center mb-12">Meet the people behind the scenes.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">SEDS Chapters</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join a global network of student-led chapters dedicated to space exploration and development through SEDS
            India.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8">Featured Chapters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {chapters.map((chapter, index) => (
              <div key={index} className="bg-dark-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">{chapter.name}</h4>
                <p className="text-gray-400 mb-4">{chapter.university}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Members:</span>
                    <span className="text-white font-semibold">{chapter.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Active Projects:</span>
                    <span className="text-white font-semibold">{chapter.projects}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "11+", label: "Universities" },
              { value: "9+", label: "States" },
              { value: "500+", label: "Active Members" },
              { value: "60+", label: "Projects" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start a Chapter</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see a SEDS chapter at your university? Start one today and join our global network of space
              enthusiasts.
            </p>
            <Button variant="outline">Start a Chapter</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">SEDS Blog</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Insights, updates, and stories from the forefront of student space exploration.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-dark-600 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{post.title}</h4>
                <p className="text-gray-400 text-sm mb-3">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-white hover:text-gray-300">
                  Read more <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-dark-800 p-8 rounded-lg max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest articles, news, and insights from the SEDS community.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-600 text-white rounded border border-dark-400 focus:outline-none focus:border-white"
              />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-16 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get Involved</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-dark-900 p-8 rounded-lg text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Join a Chapter</h3>
              <p className="text-gray-300 mb-6">
                Find a SEDS chapter at your university and start your space exploration journey.
              </p>
              <Button variant="outline">Find Chapters</Button>
            </div>

            <div className="bg-dark-900 p-8 rounded-lg text-center">
              <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Start a Project</h3>
              <p className="text-gray-300 mb-6">
                Have a space project idea? Get resources and mentorship to bring it to life.
              </p>
              <Button variant="outline">Submit Proposal</Button>
            </div>

            <div className="bg-dark-900 p-8 rounded-lg text-center">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Volunteer</h3>
              <p className="text-gray-300 mb-6">
                Support our mission by volunteering for outreach programs and events.
              </p>
              <Button variant="outline">Volunteer Now</Button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Reach for the Stars?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students worldwide who are shaping the future of space exploration.
            </p>
            <Button size="lg" variant="outline">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
