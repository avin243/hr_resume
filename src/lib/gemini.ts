import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with API key
const genAI = new GoogleGenerativeAI("AIzaSyAwfbHQ5zzDQVRMapVL1fVxDcl3PxlB2F8");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Parse resume text and extract structured information
export async function parseResume(resumeText: string) {
  try {
    const prompt = `
      Extract the following information from this resume in JSON format:
      - Full name
      - Email
      - Phone number
      - LinkedIn profile (if available)
      - Education (array of objects with institution, degree, field, startDate, endDate)
      - Experience (array of objects with company, role, startDate, endDate, description)
      - Skills (array of strings)
      - Certifications (array of objects with name, issuer, date)

      Resume text:
      ${resumeText}

      Return ONLY a valid JSON object without any additional explanation or text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON from Gemini response", e);
      // Try to extract JSON from text if it contains additional content
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error("Invalid JSON response from Gemini API");
    }
  } catch (error) {
    console.error("Error parsing resume:", error);
    throw error;
  }
}

// Compare resume with job description and provide match score
export async function analyzeResumeWithJob(resumeData: any, jobDescription: string) {
  try {
    const prompt = `
      Compare this candidate's resume information with the job description.
      Provide a match score from 0-100 and detailed explanation of the fit.
      Also identify any red flags or concerns.

      Resume information:
      ${JSON.stringify(resumeData)}

      Job description:
      ${jobDescription}

      Return the result as a JSON with the following structure:
      {
        "score": number,
        "analysis": string,
        "strengths": [string],
        "weaknesses": [string],
        "redFlags": [string],
        "recommendedQuestions": [string]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON from Gemini response", e);
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error("Invalid JSON response from Gemini API");
    }
  } catch (error) {
    console.error("Error analyzing resume with job:", error);
    throw error;
  }
}

// Detect discrepancies or red flags in the resume
export async function detectRedFlags(resumeData: any) {
  try {
    const prompt = `
      Analyze this resume information and identify potential red flags, such as:
      - Inconsistencies in timeline
      - Gaps in employment
      - Lack of specific skills for claimed roles
      - Vague descriptions
      - Frequent job changes without clear progression

      Resume information:
      ${JSON.stringify(resumeData)}

      Return the results as a JSON with the following structure:
      {
        "redFlags": [
          {
            "type": string,
            "description": string,
            "severity": "low" | "medium" | "high"
          }
        ],
        "summary": string
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON from Gemini response", e);
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error("Invalid JSON response from Gemini API");
    }
  } catch (error) {
    console.error("Error detecting red flags:", error);
    throw error;
  }
}

// Generate interview questions based on resume and job
export async function generateInterviewQuestions(resumeData: any, jobDescription: string) {
  try {
    const prompt = `
      Generate 5 tailored interview questions for this candidate based on their resume and the job description.
      Include both technical and behavioral questions relevant to the role.

      Resume information:
      ${JSON.stringify(resumeData)}

      Job description:
      ${jobDescription}

      Return the results as a JSON array of objects with the following structure:
      [
        {
          "question": string,
          "rationale": string,
          "category": "technical" | "behavioral" | "experience"
        }
      ]
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON from Gemini response", e);
      const jsonMatch = text.match(/\[\s*\{[\s\S]*\}\s*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error("Invalid JSON response from Gemini API");
    }
  } catch (error) {
    console.error("Error generating interview questions:", error);
    throw error;
  }
}

export default {
  parseResume,
  analyzeResumeWithJob,
  detectRedFlags,
  generateInterviewQuestions
};