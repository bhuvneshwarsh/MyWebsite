import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

interface EducationDetail {
  degree: string;
  institution: string;
  year: string;
  details: string;
  yearNumber: number; // For chart numeric plotting
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})

export class Education implements OnInit {
  educationDetails: EducationDetail[] = [
    {
      degree: 'B.Tech in Computer Science & Engineering (CSE)',
      institution: 'University Institute of Technology- RGPV Bhopal',
      year: '--> 2016 - 2020',
      details:
        'Focused on software and web development, data structures, algorithms, and database management.',
      yearNumber: 2020,
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'The Sharpage H S School, Gohad',
      year: '--> 2014 - 2015',
      details: 'Specialized in Science with Physics, Chemistry, and Mathematics.',
      yearNumber: 2015,
    },
    {
      degree: 'Secondary School',
      institution: 'The Sharpage H S School, Gohad',
      year: '--> 2012 - 2013',
      details: 'Completed secondary education with science stream.',
      yearNumber: 2013,
    },
  ];

  ngOnInit(): void {
    this.createEducationChart();
  }

  createEducationChart() {
    const ctx = (document.getElementById('educationChart') as HTMLCanvasElement)
      .getContext('2d');

    if (!ctx) return;

    const labels = this.educationDetails.map((ed) => ed.degree);
    const years = this.educationDetails.map((ed) => ed.yearNumber);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Year Completed',
            data: years,
            backgroundColor: '#2980b9',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              stepSize: 1,
              callback: function (value: number | string) {
                return value.toString();
              },
            },
            title: {
              display: true,
              text: 'Year',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Degree',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#34495e',
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
}
