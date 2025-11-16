import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineStep {
  year: string;
  title: string;
  company: string;
  Location: string;
  period: string;
  skills: string[];
  description: string;
}

@Component({
  selector: 'app-careerprofile',
  imports: [CommonModule],
  templateUrl: './careerprofile.html',
  styleUrl: './careerprofile.css'
})
export class Careerprofile {
  timeline: TimelineStep[] = [
    {
      year: '2021-22',
      title: 'Software Engineer Trainee',
      company: 'Cognizant Technology Solutions',
      Location: 'Chennai, India (Remote)',
      period: 'March 2021 - Feb 2022',
      skills: ['ASP.NET Core', 'ASP.Net Web API', 'SQL Server'],
      description: `I have gone through a continuous training and demo project duing first three months. Worked on the multiple client accounts.`
    },
    {
      year: '2022-23',
      title: 'Junior Software Engineer - FSE',
      company: 'Cognizant Technology Solutions',
      Location: 'Chennai, India (Remote)',
      period: 'March 2022 - Feb 2023',
      skills: ['ASP.NET Core', 'Angular', 'SQL Server', 'Azure', 'Azure DevOps'],
      description: `Worked on multiple web development issue fixes and enhancements under different client projects with a focus on .NET backend and Angular frontend. Worked Azure and Azure DevOps under client account for Application deployment using CI/CD pipelines.`
    },
    {
      year: '2023-present',
      title: 'Software Engineer - FSE',
      company: 'Cognizant Technology Solutions',
      Location: 'Gurugram, India (Hybrid)',
      period: 'March 2023 - Present',
      skills: ['ASP.NET Core', 'ASP.Net Core Web API', 'Angular', 'SQL Server', 'Azure', 'Azure DevOps', 'Data Structures', 'Algorithms'],
      description: `Developed multiple projects by self like Employee Management System, Unstructured Database Management System and this My profile Website. Eager to learn more technologies and explore new opportunities.`
    },
    {
      year: '2025',
      title: 'YouTuber as Hobby',
      company: 'Self',
      Location: 'Remote',
      period: 'Jan 2024 – Present',
      skills: ['Educational Content', 'Interview Preparation', 'New technologies', 'Topic wise DSA & Algo lectures', 'Motivating New comers'],
      description: `Created a thriving YouTube channel focused on all Dotnet Full Stack Technical Skills & strategies, tutorials, and motivational content, blending technical skills with communication expertise.`
    }
  ];

  selectedIndex = 0;

  get selectedItem(): TimelineStep {
    return this.timeline[this.selectedIndex];
  }

  selectStep(i: number): void {
    this.selectedIndex = i;
  }

downloadPDF(): void {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1bnhE0bD9Ayd0QPtz2LDKY5gp8O9VB2kK/view?usp=sharing';
    link.download = 'Bhuvneshwar_resume.pdf';
    link.target = '_blank';
    link.click();
  }
}
