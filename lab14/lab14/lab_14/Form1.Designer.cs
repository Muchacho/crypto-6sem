namespace lab_14
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.openFileDialog = new System.Windows.Forms.OpenFileDialog();
            this.saveFileDialog = new System.Windows.Forms.SaveFileDialog();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.label3 = new System.Windows.Forms.Label();
            this.extractedMessage = new System.Windows.Forms.RichTextBox();
            this.extract = new System.Windows.Forms.Button();
            this.fileForExtract = new System.Windows.Forms.Label();
            this.chooseFileForExtract = new System.Windows.Forms.Button();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.hide = new System.Windows.Forms.Button();
            this.fileForHide = new System.Windows.Forms.Label();
            this.hiddenMessage = new System.Windows.Forms.RichTextBox();
            this.chooseFileForHide = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.tabPage2.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.tabControl1.SuspendLayout();
            this.SuspendLayout();
            // 
            // openFileDialog
            // 
            this.openFileDialog.Filter = "Images (*.bmp)|*.bmp|All files (*.*)|*.*";
            // 
            // saveFileDialog
            // 
            this.saveFileDialog.Filter = "Images (*.bmp)|*.bmp|All files (*.*)|*.*";
            // 
            // tabPage2
            // 
            this.tabPage2.Controls.Add(this.button2);
            this.tabPage2.Controls.Add(this.label3);
            this.tabPage2.Controls.Add(this.extractedMessage);
            this.tabPage2.Controls.Add(this.extract);
            this.tabPage2.Controls.Add(this.fileForExtract);
            this.tabPage2.Controls.Add(this.chooseFileForExtract);
            this.tabPage2.Location = new System.Drawing.Point(4, 22);
            this.tabPage2.Margin = new System.Windows.Forms.Padding(2);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Padding = new System.Windows.Forms.Padding(2);
            this.tabPage2.Size = new System.Drawing.Size(441, 307);
            this.tabPage2.TabIndex = 1;
            this.tabPage2.Text = "Extract";
            this.tabPage2.UseVisualStyleBackColor = true;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(4, 89);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(97, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Extracted message";
            // 
            // extractedMessage
            // 
            this.extractedMessage.Location = new System.Drawing.Point(5, 105);
            this.extractedMessage.Margin = new System.Windows.Forms.Padding(2);
            this.extractedMessage.Name = "extractedMessage";
            this.extractedMessage.ReadOnly = true;
            this.extractedMessage.Size = new System.Drawing.Size(431, 197);
            this.extractedMessage.TabIndex = 3;
            this.extractedMessage.Text = "";
            // 
            // extract
            // 
            this.extract.Location = new System.Drawing.Point(5, 50);
            this.extract.Margin = new System.Windows.Forms.Padding(2);
            this.extract.Name = "extract";
            this.extract.Size = new System.Drawing.Size(207, 37);
            this.extract.TabIndex = 2;
            this.extract.Text = "Extract message horizontal";
            this.extract.UseVisualStyleBackColor = true;
            this.extract.Click += new System.EventHandler(this.extract_Click);
            // 
            // fileForExtract
            // 
            this.fileForExtract.AutoSize = true;
            this.fileForExtract.Location = new System.Drawing.Point(86, 18);
            this.fileForExtract.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.fileForExtract.Name = "fileForExtract";
            this.fileForExtract.Size = new System.Drawing.Size(0, 13);
            this.fileForExtract.TabIndex = 1;
            // 
            // chooseFileForExtract
            // 
            this.chooseFileForExtract.Location = new System.Drawing.Point(7, 14);
            this.chooseFileForExtract.Margin = new System.Windows.Forms.Padding(2);
            this.chooseFileForExtract.Name = "chooseFileForExtract";
            this.chooseFileForExtract.Size = new System.Drawing.Size(75, 24);
            this.chooseFileForExtract.TabIndex = 0;
            this.chooseFileForExtract.Text = "Choose file";
            this.chooseFileForExtract.UseVisualStyleBackColor = true;
            this.chooseFileForExtract.Click += new System.EventHandler(this.chooseFileForExtract_Click);
            // 
            // tabPage1
            // 
            this.tabPage1.BackColor = System.Drawing.Color.Gray;
            this.tabPage1.Controls.Add(this.button1);
            this.tabPage1.Controls.Add(this.hide);
            this.tabPage1.Controls.Add(this.fileForHide);
            this.tabPage1.Controls.Add(this.hiddenMessage);
            this.tabPage1.Controls.Add(this.chooseFileForHide);
            this.tabPage1.Controls.Add(this.label1);
            this.tabPage1.Location = new System.Drawing.Point(4, 22);
            this.tabPage1.Margin = new System.Windows.Forms.Padding(2);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(2);
            this.tabPage1.Size = new System.Drawing.Size(441, 307);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "Hide";
            // 
            // hide
            // 
            this.hide.BackColor = System.Drawing.Color.IndianRed;
            this.hide.Location = new System.Drawing.Point(7, 261);
            this.hide.Margin = new System.Windows.Forms.Padding(2);
            this.hide.Name = "hide";
            this.hide.Size = new System.Drawing.Size(204, 37);
            this.hide.TabIndex = 4;
            this.hide.Text = "Hide message horizontal";
            this.hide.UseVisualStyleBackColor = false;
            this.hide.Click += new System.EventHandler(this.hide_Click);
            // 
            // fileForHide
            // 
            this.fileForHide.AutoSize = true;
            this.fileForHide.Location = new System.Drawing.Point(86, 237);
            this.fileForHide.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.fileForHide.Name = "fileForHide";
            this.fileForHide.Size = new System.Drawing.Size(0, 13);
            this.fileForHide.TabIndex = 3;
            // 
            // hiddenMessage
            // 
            this.hiddenMessage.BackColor = System.Drawing.SystemColors.HotTrack;
            this.hiddenMessage.Location = new System.Drawing.Point(7, 26);
            this.hiddenMessage.Margin = new System.Windows.Forms.Padding(2);
            this.hiddenMessage.Name = "hiddenMessage";
            this.hiddenMessage.Size = new System.Drawing.Size(431, 197);
            this.hiddenMessage.TabIndex = 2;
            this.hiddenMessage.Text = "";
            // 
            // chooseFileForHide
            // 
            this.chooseFileForHide.BackColor = System.Drawing.Color.RosyBrown;
            this.chooseFileForHide.Location = new System.Drawing.Point(7, 232);
            this.chooseFileForHide.Margin = new System.Windows.Forms.Padding(2);
            this.chooseFileForHide.Name = "chooseFileForHide";
            this.chooseFileForHide.Size = new System.Drawing.Size(75, 24);
            this.chooseFileForHide.TabIndex = 0;
            this.chooseFileForHide.Text = "Choose file";
            this.chooseFileForHide.UseVisualStyleBackColor = false;
            this.chooseFileForHide.Click += new System.EventHandler(this.chooseFileForHide_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(4, 10);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(77, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Enter message";
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tabPage1);
            this.tabControl1.Controls.Add(this.tabPage2);
            this.tabControl1.Location = new System.Drawing.Point(9, 10);
            this.tabControl1.Margin = new System.Windows.Forms.Padding(2);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(449, 333);
            this.tabControl1.TabIndex = 2;
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.IndianRed;
            this.button1.Location = new System.Drawing.Point(215, 261);
            this.button1.Margin = new System.Windows.Forms.Padding(2);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(204, 37);
            this.button1.TabIndex = 5;
            this.button1.Text = "Hide message vertical";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(216, 50);
            this.button2.Margin = new System.Windows.Forms.Padding(2);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(207, 37);
            this.button2.TabIndex = 5;
            this.button2.Text = "Extract message vertical";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(467, 353);
            this.Controls.Add(this.tabControl1);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Form1";
            this.Text = "LSB";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.tabPage2.ResumeLayout(false);
            this.tabPage2.PerformLayout();
            this.tabPage1.ResumeLayout(false);
            this.tabPage1.PerformLayout();
            this.tabControl1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.OpenFileDialog openFileDialog;
        private System.Windows.Forms.SaveFileDialog saveFileDialog;
        private System.Windows.Forms.TabPage tabPage2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.RichTextBox extractedMessage;
        private System.Windows.Forms.Button extract;
        private System.Windows.Forms.Label fileForExtract;
        private System.Windows.Forms.Button chooseFileForExtract;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.Button hide;
        private System.Windows.Forms.Label fileForHide;
        private System.Windows.Forms.RichTextBox hiddenMessage;
        private System.Windows.Forms.Button chooseFileForHide;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
    }
}

