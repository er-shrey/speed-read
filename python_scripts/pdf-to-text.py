import PyPDF2

# Function to convert PDF to text
def pdf_to_text(pdf_file, txt_file):
    # Open the PDF file
    with open(pdf_file, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        
        # Initialize an empty string to store text
        text = ""
        
        # Loop through all pages of the PDF and extract text
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()

    # Write the extracted text to a .txt file
    with open(txt_file, 'w', encoding='utf-8') as output_file:
        output_file.write(text)

    print(f"Text extracted and saved to {txt_file}")

# Example usage
pdf_file = "sample.pdf"  # Path to the PDF file
txt_file = "output.txt"  # Path to save the extracted text

pdf_to_text(pdf_file, txt_file)
